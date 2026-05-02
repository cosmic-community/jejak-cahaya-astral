// app/programs/[slug]/page.tsx
import { getProgramBySlug } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const name = getMetafieldValue(program.metadata?.name) || program.title;
  const shortDesc = getMetafieldValue(program.metadata?.short_description);
  const fullDesc = getMetafieldValue(program.metadata?.full_description);
  const category = getMetafieldValue(program.metadata?.category);
  const image = program.metadata?.featured_image?.imgix_url;

  return (
    <article className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/programs" className="text-cosmic-gold hover:text-cosmic-glow inline-flex items-center gap-2 mb-8 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Programs
        </Link>

        {image && (
          <div className="rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-cosmic-glow/20">
            <img
              src={`${image}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-auto"
            />
          </div>
        )}

        {category && (
          <span className="inline-block px-4 py-1 bg-cosmic-purple/50 rounded-full text-cosmic-gold text-sm font-semibold border border-cosmic-gold/30 mb-4">
            {category}
          </span>
        )}

        <h1 className="font-serif text-4xl md:text-6xl font-bold text-gradient mb-6">
          {name}
        </h1>

        {shortDesc && (
          <p className="text-xl text-cosmic-star/80 mb-8 leading-relaxed">{shortDesc}</p>
        )}

        {fullDesc && (
          <div
            className="prose prose-invert prose-lg max-w-none text-cosmic-star/80"
            dangerouslySetInnerHTML={{ __html: fullDesc }}
          />
        )}
      </div>
    </article>
  );
}