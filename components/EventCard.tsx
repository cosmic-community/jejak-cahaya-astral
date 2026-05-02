import Link from 'next/link';
import { Event } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function EventCard({ event }: { event: Event }) {
  const eventName = getMetafieldValue(event.metadata?.event_name) || event.title;
  const description = getMetafieldValue(event.metadata?.description);
  const eventDate = getMetafieldValue(event.metadata?.event_date);
  const location = getMetafieldValue(event.metadata?.location);
  const image = event.metadata?.cover_image?.imgix_url;

  const formattedDate = eventDate
    ? new Date(eventDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return (
    <Link
      href={`/events/${event.slug}`}
      className="glass-card rounded-2xl overflow-hidden group transition-all duration-300 hover:transform hover:-translate-y-2 block"
    >
      {image && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={`${image}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={eventName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark via-cosmic-dark/40 to-transparent"></div>
          {formattedDate && (
            <div className="absolute top-4 right-4 bg-cosmic-gold text-cosmic-dark px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
              {formattedDate}
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-cosmic-star mb-2 group-hover:text-cosmic-gold transition-colors">
          {eventName}
        </h3>
        {location && (
          <div className="flex items-center text-cosmic-glow text-sm mb-3">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        )}
        {description && (
          <p className="text-cosmic-star/70 text-sm line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  );
}