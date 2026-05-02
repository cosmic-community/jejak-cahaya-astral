// app/events/[slug]/page.tsx
import { getEventBySlug, getMetafieldValue } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const eventName = getMetafieldValue(event.metadata?.event_name) || event.title;
  const description = getMetafieldValue(event.metadata?.description);
  const eventDate = getMetafieldValue(event.metadata?.event_date);
  const location = getMetafieldValue(event.metadata?.location);
  const image = event.metadata?.cover_image?.imgix_url;

  const formattedDate = eventDate
    ? new Date(eventDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return (
    <article className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/events" className="text-cosmic-gold hover:text-cosmic-glow inline-flex items-center gap-2 mb-8 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </Link>

        {image && (
          <div className="rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-cosmic-glow/20">
            <img
              src={`${image}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={eventName}
              className="w-full h-auto"
            />
          </div>
        )}

        <h1 className="font-serif text-4xl md:text-6xl font-bold text-gradient mb-6">
          {eventName}
        </h1>

        <div className="flex flex-wrap gap-4 mb-8">
          {formattedDate && (
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-cosmic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-cosmic-star">{formattedDate}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-cosmic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-cosmic-star">{location}</span>
            </div>
          )}
        </div>

        {description && (
          <div
            className="prose prose-invert prose-lg max-w-none text-cosmic-star/80"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </article>
  );
}