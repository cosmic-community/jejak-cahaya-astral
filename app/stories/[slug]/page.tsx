// app/stories/[slug]/page.tsx
import { getStoryBySlug, getMetafieldValue } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const storyTitle = getMetafieldValue(story.metadata?.story_title) || story.title;
  const authorName = getMetafieldValue(story.metadata?.author_name);
  const quote = getMetafieldValue(story.metadata?.quote);
  const fullStory = getMetafieldValue(story.metadata?.full_story);
  const image = story.metadata?.image?.imgix_url;

  return (
    <article className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/stories" className="text-cosmic-gold hover:text-cosmic-glow inline-flex items-center gap-2 mb-8 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Stories
        </Link>

        <div className="text-center mb-12">
          {image && (
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-cosmic-gold/50 shadow-2xl shadow-cosmic-glow/30">
              <img
                src={`${image}?w=400&h=400&fit=crop&auto=format,compress`}
                alt={authorName || storyTitle}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-4">
            {storyTitle}
          </h1>

          {authorName && (
            <p className="text-cosmic-glow text-lg font-semibold">— {authorName}</p>
          )}
        </div>

        {quote && (
          <div className="glass-card rounded-2xl p-8 mb-8 border-l-4 border-cosmic-gold">
            <p className="text-2xl font-serif italic text-cosmic-star/90 leading-relaxed">
              "{quote}"
            </p>
          </div>
        )}

        {fullStory && (
          <div
            className="prose prose-invert prose-lg max-w-none text-cosmic-star/80"
            dangerouslySetInnerHTML={{ __html: fullStory }}
          />
        )}
      </div>
    </article>
  );
}