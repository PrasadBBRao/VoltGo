import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    quote: 'The experience feels polished and effortless. Finding a charger and booking a slot took less than a minute.',
    name: 'Ava Chen',
    role: 'EV Driver',
  },
  {
    quote: 'Clean design, simple navigation, and very reassuring. It feels like a product built for real users.',
    name: 'Noah Patel',
    role: 'Weekend Traveler',
  },
  {
    quote: 'The booking flow is calm and clear. It makes charging feel less stressful and more planned.',
    name: 'Liam Ortiz',
    role: 'Urban Commuter',
  },
];

function Testimonials() {
  return (
    <section id="contact" className="section" style={{ background: '#F8FAFC' }}>
      <Container>
        <SectionTitle eyebrow="Testimonials" title="Loved by drivers who value simplicity" subtitle="Every detail is designed to make charging more predictable and enjoyable." />
        <div className="testimonial-grid" style={{ marginTop: '2rem' }}>
          {testimonials.map((item) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="card card-hover" style={{ padding: '1.35rem' }}>
              <p style={{ color: '#64748B', marginTop: 0 }}>“{item.quote}”</p>
              <div style={{ fontWeight: 700, marginTop: '1rem' }}>{item.name}</div>
              <div style={{ color: '#34C759', fontSize: '0.92rem' }}>{item.role}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
