import { Mission } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function MissionSection({ mission }: { mission: Mission | null }) {
  if (!mission) return null;

  const visionText = getMetafieldValue(mission.metadata?.vision);
  const coreValues = getMetafieldValue(mission.metadata?.core_values);
  const missionStatement = getMetafieldValue(mission.metadata?.mission_statement);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-4">
            Our Sacred Path
          </h2>
          <div className="w-24 h-1 bg-astral-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missionStatement && (
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-serif text-2xl font-bold text-cosmic-gold mb-4">Mission</h3>
              <p className="text-cosmic-star/80 leading-relaxed">{missionStatement}</p>
            </div>
          )}

          {visionText && (
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="font-serif text-2xl font-bold text-cosmic-gold mb-4">Vision</h3>
              <p className="text-cosmic-star/80 leading-relaxed">{visionText}</p>
            </div>
          )}

          {coreValues && (
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="font-serif text-2xl font-bold text-cosmic-gold mb-4">Core Values</h3>
              <div className="text-cosmic-star/80 leading-relaxed prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: coreValues }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}