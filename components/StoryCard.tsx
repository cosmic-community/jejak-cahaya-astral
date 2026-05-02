import Link from 'next/link';
import { ImpactStory } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function StoryCard({ story }: { story: ImpactStory }) {
  const storyTitle = getMetafieldValue(story.metadata?.story_title) || story.title;
  const authorName = getMetafieldValue(story.metadata?.author_name);
  const quote = getMetafieldValue(story.metadata?.quote);
  const image = story.metadata?.image?.imgix_url;

  return (
    <Link
      href={`/stories/${story.slug}`}
      className="glass-card rounded-2xl p-8 group transition-all duration-300 hover:transform hover:-translate-y-2 block relative overflow-hidden"
    >
      <div className="absolute top-4 right-4 text-6xl text-cosmic-purple/30 font-serif">"</div>

      {image && (
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-cosmic-gold/50">
          <img
            src={`${image}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={authorName || storyTitle}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h3 className="font-serif text-xl font-bold text-cosmic-gold mb-3 group-hover:text-cosmic-glow transition-colors">
        {storyTitle}
      </h3>

      {quote && (
        <p className="text-cosmic-star/80 italic mb-4 line-clamp-4 leading-relaxed">
          {quote}
        </p>
      )}

      {authorName && (
        <p className="text-cosmic-glow font-semibold text-sm">— {authorName}</p>
      )}
    </Link>
  );
}