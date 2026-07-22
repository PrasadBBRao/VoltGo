import { BatteryCharging, Clock3, ShieldCheck, Compass, Leaf, Headphones } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const features = [
  { icon: Compass, title: 'Smart Search', description: 'Discover nearby stations with a fast and intuitive discovery experience.' },
  { icon: Clock3, title: 'Real-Time Availability', description: 'See live charger readiness and avoid wasted trips.' },
  { icon: ShieldCheck, title: 'Secure Booking', description: 'Reserve with confidence through a clean, protected flow.' },
  { icon: BatteryCharging, title: 'Quick Navigation', description: 'Move from search to charging with minimal friction.' },
  { icon: Leaf, title: 'Eco Friendly', description: 'Support smarter travel habits with optimized charging recommendations.' },
  { icon: Headphones, title: '24/7 Support', description: 'Get assistive support whenever you need help on the go.' },
];

function Features() {
  return (
    <section id="features" className="section">
      <Container>
        <SectionTitle eyebrow="Features" title="Everything you need for a better charging experience" subtitle="A premium experience built around speed, clarity, and trust." />
        <div className="feature-grid" style={{ marginTop: '2.25rem' }}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card card-hover" style={{ padding: '1.35rem', textAlign: 'left' }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: '#f2fff4', color: '#34C759', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.9rem' }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ margin: '0 0 0.45rem', fontSize: '1.05rem' }}>{feature.title}</h3>
                <p style={{ margin: 0, color: '#64748B', fontSize: '0.95rem' }}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Features;
