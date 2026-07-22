import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const stats = [
  { value: 240, label: 'Charging Stations', suffix: '+' },
  { value: 12800, label: 'Bookings', suffix: '+' },
  { value: 9600, label: 'Happy Drivers', suffix: '+' },
  { value: 18, label: 'Cities', suffix: '+' },
];

function AnimatedValue({ target, suffix }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return <span>{value}{suffix}</span>;
}

function Stats() {
  return (
    <section className="section">
      <Container>
        <SectionTitle eyebrow="Performance" title="Trusted by modern drivers across growing EV cities" subtitle="VoltGo is designed to scale with the next generation of charging demand." />
        <div className="stats-grid" style={{ marginTop: '2rem' }}>
          {stats.map((stat) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="card card-hover" style={{ padding: '1.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#34C759' }}>
                <AnimatedValue target={stat.value} suffix={stat.suffix} />
              </div>
              <p style={{ marginTop: '0.4rem', color: '#64748B' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;
