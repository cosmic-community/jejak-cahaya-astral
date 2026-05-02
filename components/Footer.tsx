import Link from 'next/link';
import { getMission } from '@/lib/cosmic';

export default async function Footer() {
  const mission = await getMission();
  const youtubeUrl = mission?.metadata?.youtube_url || 'https://www.youtube.com/@Jejakcahayaastral';
  const tiktokUrl = mission?.metadata?.tiktok_url || '#';

  return (
    <footer className="bg-cosmic-deep/50 border-t border-cosmic-purple/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌌</span>
              <span className="font-serif text-xl text-gradient font-bold">
                Jejak Cahaya Astral
              </span>
            </div>
            <p className="text-cosmic-star/70 text-sm">
              Membagikan sejarah, edukasi, dan misteri dengan visualisasi memukau untuk orang-orang yang open minded.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg text-cosmic-gold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/programs" className="text-cosmic-star/70 hover:text-cosmic-gold transition">Programs</Link></li>
              <li><Link href="/events" className="text-cosmic-star/70 hover:text-cosmic-gold transition">Events</Link></li>
              <li><Link href="/stories" className="text-cosmic-star/70 hover:text-cosmic-gold transition">Impact Stories</Link></li>
              <li><Link href="/team" className="text-cosmic-star/70 hover:text-cosmic-gold transition">Team</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-cosmic-gold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-cosmic-star/70 hover:text-cosmic-gold transition flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-cosmic-star/70 hover:text-cosmic-gold transition flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cosmic-purple/30 mt-8 pt-8 text-center text-cosmic-star/50 text-sm">
          © {new Date().getFullYear()} Jejak Cahaya Astral. All rights reserved.
        </div>
      </div>
    </footer>
  );
}