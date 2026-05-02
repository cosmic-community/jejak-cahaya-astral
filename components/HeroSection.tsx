import Link from 'next/link';
import { Mission } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function HeroSection({ mission }: { mission: Mission | null }) {
  const heroImage = mission?.metadata?.hero_image?.imgix_url;
  const missionStatement = getMetafieldValue(mission?.metadata?.mission_statement);
  const youtubeUrl = mission?.metadata?.youtube_url || 'https://www.youtube.com/@Jejakcahayaastral';

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${heroImage}?w=2400&h=1600&fit=crop&auto=format,compress`}
            alt="Cosmic background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/80 via-cosmic-deep/70 to-cosmic-dark"></div>
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="inline-block animate-float mb-8">
          <span className="text-7xl md:text-9xl">🌌</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient glow-text">
          Jejak Cahaya Astral
        </h1>

        <p className="text-xl md:text-2xl text-cosmic-star/90 mb-4 font-light max-w-3xl mx-auto leading-relaxed">
          {missionStatement || 'Menelusuri jejak sejarah, edukasi, dan misteri alam semesta'}
        </p>

        <p className="text-base md:text-lg text-cosmic-gold/80 mb-12 italic">
          ✨ Hanya untuk orang-orang yang open minded ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cosmic px-8 py-4 rounded-full text-white font-semibold inline-flex items-center gap-2 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch on YouTube
          </a>
          <Link
            href="/programs"
            className="px-8 py-4 rounded-full border-2 border-cosmic-glow text-cosmic-glow hover:bg-cosmic-glow hover:text-white transition-all duration-300 font-semibold"
          >
            Explore Programs
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cosmic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}