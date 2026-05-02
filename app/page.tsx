import { getMission, getPrograms, getEvents, getImpactStories } from '@/lib/cosmic';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ProgramCard from '@/components/ProgramCard';
import EventCard from '@/components/EventCard';
import StoryCard from '@/components/StoryCard';
import Link from 'next/link';

export default async function HomePage() {
  const [mission, programs, events, stories] = await Promise.all([
    getMission(),
    getPrograms(),
    getEvents(),
    getImpactStories(),
  ]);

  const featuredPrograms = programs.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);
  const featuredStories = stories.slice(0, 2);

  return (
    <>
      <HeroSection mission={mission} />
      <MissionSection mission={mission} />

      {featuredPrograms.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-4">
                  Programs
                </h2>
                <p className="text-cosmic-star/70 text-lg">Explore our cosmic offerings</p>
              </div>
              <Link href="/programs" className="text-cosmic-gold hover:text-cosmic-glow font-semibold hidden md:flex items-center gap-2 transition">
                View All
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>
      )}

      {upcomingEvents.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cosmic-deep/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-4">
                  Events
                </h2>
                <p className="text-cosmic-star/70 text-lg">Mystical gatherings ahead</p>
              </div>
              <Link href="/events" className="text-cosmic-gold hover:text-cosmic-glow font-semibold hidden md:flex items-center gap-2 transition">
                View All
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredStories.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-4">
                  Voices of Light
                </h2>
                <p className="text-cosmic-star/70 text-lg">Stories from our community</p>
              </div>
              <Link href="/stories" className="text-cosmic-gold hover:text-cosmic-glow font-semibold hidden md:flex items-center gap-2 transition">
                View All
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}