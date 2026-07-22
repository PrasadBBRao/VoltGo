import { motion } from 'framer-motion';
import { BatteryCharging, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

function Hero() {
  return (
    <section id="home" className="section">
      <Container>
        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="hero-copy">
            <p style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#34C759', fontWeight: 600, padding: '0.45rem 0.8rem', borderRadius: 999, background: '#f2fff4', marginBottom: '1rem' }}>
              <Sparkles size={15} /> Charge smart. Drive further.
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 4.2vw, 3.9rem)', lineHeight: 1.08, fontWeight: 800, margin: '0 0 1rem', color: '#0F172A', letterSpacing: '-0.02em' }}>
              Power Your Journey with Smarter EV Charging
            </h1>
            <p style={{ fontSize: '1.06rem', color: '#64748B', maxWidth: '640px', marginBottom: '1.6rem' }}>
              Locate charging stations, book instantly, and charge with confidence through a premium EV experience designed for modern drivers.
            </p>
            <div className="hero-buttons">
              <Button href="#stations">Find Stations</Button>
              <Button href="#features" variant="secondary">Explore Features</Button>
            </div>
            <div className="hero-badges">
              <span><MapPin size={16} /> Nearby stations</span>
              <span><ShieldCheck size={16} /> Secure booking</span>
              <span><BatteryCharging size={16} /> Fast charging</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="card hero-side">
            <div className="hero-panel">
              <div style={{ display: 'grid', gap: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                  <strong style={{ fontSize: '1rem' }}>Live Station Overview</strong>
                  <span style={{ color: '#34C759', fontWeight: 700 }}>Open</span>
                </div>
                <div style={{ display: 'grid', gap: '0.7rem' }}>
                  <div className="card" style={{ padding: '0.9rem 1rem', borderRadius: 16 }}>
                    <div style={{ fontWeight: 600 }}>Riverfront Charge Hub</div>
                    <div style={{ color: '#64748B', fontSize: '0.92rem' }}>4 fast chargers • 12 mins away</div>
                  </div>
                  <div className="card" style={{ padding: '0.9rem 1rem', borderRadius: 16 }}>
                    <div style={{ fontWeight: 600 }}>North Loop Station</div>
                    <div style={{ color: '#64748B', fontSize: '0.92rem' }}>2 ultra-fast chargers • 8 mins away</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
