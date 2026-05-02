import Link from 'next/link';
import { Program } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function ProgramCard({ program }: { program: Program }) {
  const name = getMetafieldValue(program.metadata?.name) || program.title;
  const shortDesc = getMetafieldValue(program.metadata?.short_description);
  const category = getMetafieldValue(program.metadata?.category);
  const image = program.metadata?.featured_image?.imgix_url;

  return (
    <Link
      href={`/programs/${program.slug}`}
      className="glass-card rounded-2xl overflow-hidden group transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cosmic-glow/20 block"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${image}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark to-transparent"></div>
          {category && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-cosmic-purple/80 backdrop-blur-sm rounded-full text-xs text-cosmic-gold font-semibold border border-cosmic-gold/30">
              {category}
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-cosmic-star mb-3 group-hover:text-cosmic-gold transition-colors">
          {name}
        </h3>
        {shortDesc && (
          <p className="text-cosmic-star/70 text-sm line-clamp-3">{shortDesc}</p>
        )}
        <div className="mt-4 inline-flex items-center text-cosmic-glow text-sm font-semibold group-hover:text-cosmic-gold">
          Explore
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}