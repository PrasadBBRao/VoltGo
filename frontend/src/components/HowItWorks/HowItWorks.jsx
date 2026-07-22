import { ArrowDown, Search, Plug, CalendarCheck, Car } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const steps = [
  { icon: Search, title: 'Search Station' },
  { icon: Plug, title: 'Select Charger' },
  { icon: CalendarCheck, title: 'Book Slot' },
  { icon: Car, title: 'Charge Vehicle' },
];

function HowItWorks() {
  return (
    <section id="about" className="section" style={{ background: '#F8FAFC' }}>
      <Container>
        <SectionTitle eyebrow="How It Works" title="A smooth experience from search to charging" subtitle="Designed to feel as seamless as modern ticket booking, but for EV charging." />
        <div className="works-grid" style={{ marginTop: '2rem' }}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} style={{ textAlign: 'center' }}>
                <div className="card card-hover" style={{ padding: '1.2rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: 54, height: 54, borderRadius: 16, background: '#34C759', color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={24} />
                  </div>
                </div>
                <h3 style={{ margin: '0 0 0.25rem', fontSize: '1rem' }}>{step.title}</h3>
                {index < steps.length - 1 && <div style={{ color: '#34C759', marginTop: '0.55rem' }}><ArrowDown size={18} /></div>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;
