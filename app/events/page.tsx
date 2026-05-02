import { getEvents } from '@/lib/cosmic';
import EventCard from '@/components/EventCard';

export const metadata = {
  title: 'Events - Jejak Cahaya Astral',
  description: 'Mystical gatherings and events from Jejak Cahaya Astral.',
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient mb-6 glow-text">
            Events
          </h1>
          <p className="text-cosmic-star/70 text-xl max-w-2xl mx-auto">
            Join us in mystical gatherings and explore cosmic mysteries together
          </p>
          <div className="w-24 h-1 bg-astral-gradient mx-auto rounded-full mt-6"></div>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-cosmic-star/70 text-lg">No events scheduled at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}