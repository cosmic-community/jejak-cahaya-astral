import { getTeamMembers } from '@/lib/cosmic';
import TeamCard from '@/components/TeamCard';

export const metadata = {
  title: 'Team - Jejak Cahaya Astral',
  description: 'Meet the team behind Jejak Cahaya Astral.',
};

export default async function TeamPage() {
  const members = await getTeamMembers();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient mb-6 glow-text">
            Our Team
          </h1>
          <p className="text-cosmic-star/70 text-xl max-w-2xl mx-auto">
            The astral guides illuminating the path to knowledge
          </p>
          <div className="w-24 h-1 bg-astral-gradient mx-auto rounded-full mt-6"></div>
        </div>

        {members.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-cosmic-star/70 text-lg">No team members listed at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}