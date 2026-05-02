import type { Metadata } from 'next';
import './globals.css';
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CosmicBadge from '@/components/CosmicBadge';

export const metadata: Metadata = {
  title: 'Jejak Cahaya Astral - History, Education, Mystery',
  description: 'Channel YouTube dan TikTok Jejak Cahaya Astral. Membagikan sejarah, edukasi, dan misteri dengan visualisasi memukau untuk orang-orang yang open minded.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌌</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className="cosmic-bg min-h-screen relative">
        <StarField />
        <div className="relative z-10">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  );
}