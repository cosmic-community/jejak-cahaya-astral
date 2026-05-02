import { TeamMember } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function TeamCard({ member }: { member: TeamMember }) {
  const fullName = getMetafieldValue(member.metadata?.full_name) || member.title;
  const role = getMetafieldValue(member.metadata?.role);
  const bio = getMetafieldValue(member.metadata?.bio);
  const photo = member.metadata?.photo?.imgix_url;

  return (
    <div className="glass-card rounded-2xl overflow-hidden group transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cosmic-glow/20">
      {photo && (
        <div className="relative h-72 overflow-hidden">
          <img
            src={`${photo}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={fullName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark via-transparent to-transparent"></div>
        </div>
      )}
      <div className="p-6 text-center">
        <h3 className="font-serif text-xl font-bold text-cosmic-star mb-1 group-hover:text-cosmic-gold transition-colors">
          {fullName}
        </h3>
        {role && (
          <p className="text-cosmic-glow text-sm font-semibold mb-3 uppercase tracking-wide">
            {role}
          </p>
        )}
        {bio && (
          <p className="text-cosmic-star/70 text-sm line-clamp-3">{bio}</p>
        )}
      </div>
    </div>
  );
}