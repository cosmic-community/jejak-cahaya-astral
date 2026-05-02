import { getImpactStories } from '@/lib/cosmic';
import StoryCard from '@/components/StoryCard';

export const metadata = {
  title: 'Impact Stories - Jejak Cahaya Astral',
  description: 'Stories from our open-minded community.',
};

export default async function StoriesPage() {
  const stories = await getImpactStories();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient mb-6 glow-text">
            Voices of Light
          </h1>
          <p className="text-cosmic-star/70 text-xl max-w-2xl mx-auto">
            Stories of transformation from our community of open-minded explorers
          </p>
          <div className="w-24 h-1 bg-astral-gradient mx-auto rounded-full mt-6"></div>
        </div>

        {stories.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-cosmic-star/70 text-lg">No stories available at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}