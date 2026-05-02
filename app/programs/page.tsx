import { getPrograms } from '@/lib/cosmic';
import ProgramCard from '@/components/ProgramCard';

export const metadata = {
  title: 'Programs - Jejak Cahaya Astral',
  description: 'Explore our cosmic programs covering history, education, and mystery.',
};

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient mb-6 glow-text">
            Our Programs
          </h1>
          <p className="text-cosmic-star/70 text-xl max-w-2xl mx-auto">
            Discover the mysteries of history, education, and the cosmos through our curated content
          </p>
          <div className="w-24 h-1 bg-astral-gradient mx-auto rounded-full mt-6"></div>
        </div>

        {programs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-cosmic-star/70 text-lg">No programs available at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}