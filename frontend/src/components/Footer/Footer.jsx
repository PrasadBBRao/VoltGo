import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Container from '../ui/Container';

const quickLinks = ['Home', 'Stations', 'Features', 'About', 'Contact'];
const company = ['Our Story', 'Careers', 'Press'];
const support = ['Help Center', 'Terms', 'Privacy'];

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #E5E7EB', padding: '3rem 0', background: '#FFFFFF' }}>
      <Container>
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.8rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 12, background: '#34C759', color: 'white' }}>
                <span style={{ fontSize: '1rem' }}>⚡</span>
              </span>
              VoltGo
            </div>
            <p style={{ color: '#64748B', maxWidth: '320px' }}>Premium EV charging management designed to help drivers discover, reserve, and power up without friction.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '0.75rem' }}>Quick Links</h4>
            {quickLinks.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="footer-link" style={{ display: 'block', color: '#64748B', marginBottom: '0.45rem' }}>{item}</a>)}
          </div>
          <div>
            <h4 style={{ marginBottom: '0.75rem' }}>Company</h4>
            {company.map((item) => <a key={item} href="#" className="footer-link" style={{ display: 'block', color: '#64748B', marginBottom: '0.45rem' }}>{item}</a>)}
          </div>
          <div>
            <h4 style={{ marginBottom: '0.75rem' }}>Support</h4>
            {support.map((item) => <a key={item} href="#" className="footer-link" style={{ display: 'block', color: '#64748B', marginBottom: '0.45rem' }}>{item}</a>)}
            <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
              <a href="#" aria-label="Facebook" style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Facebook size={16} /></a>
              <a href="#" aria-label="Instagram" style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Instagram size={16} /></a>
              <a href="#" aria-label="LinkedIn" style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Linkedin size={16} /></a>
              <a href="#" aria-label="Twitter" style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Twitter size={16} /></a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '2rem', paddingTop: '1.2rem', borderTop: '1px solid #E5E7EB', color: '#64748B', fontSize: '0.93rem' }}>
          © 2026 VoltGo. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
