import Button from '../ui/Button';
import Container from '../ui/Container';

function CTA() {
  return (
    <section className="section">
      <Container>
        <div className="card" style={{ padding: '2.3rem', textAlign: 'center', background: 'linear-gradient(135deg, #34C759 0%, #7ED957 100%)', color: 'white', border: 'none' }}>
          <h2 style={{ margin: '0 0 0.75rem', fontSize: 'clamp(1.7rem, 2.4vw, 2.3rem)' }}>Ready to charge smarter?</h2>
          <p style={{ margin: '0 auto 1.2rem', maxWidth: '620px', opacity: 0.95 }}>
            Join the next generation of EV charging with a premium experience built for speed, simplicity, and confidence.
          </p>
          <Button href="#stations" variant="secondary" icon={false} style={{ background: 'white', color: '#34C759' }}>
            Start Exploring
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
