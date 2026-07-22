import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../ui/Button';

const navItems = ['Home', 'Stations', 'Features', 'About', 'Contact'];

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavSelect = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.95rem 0' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 700, fontSize: '1.1rem', color: '#1E293B' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 12, background: '#34C759', color: 'white' }}>
            <Zap size={20} />
          </span>
          VoltGo
        </a>

        <nav aria-label="Primary" style={{ display: 'flex', gap: '1.4rem', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={{ fontWeight: 500 }}>
              {item}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '0.75rem' }} className="desktop-actions">
          <Button href="#login" variant="secondary" icon={false}>Login</Button>
          <Button href="#register" icon={false}>Register</Button>
        </div>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          style={{ display: 'none', border: 'none', background: 'transparent', cursor: 'pointer', padding: '0.4rem', borderRadius: '50%' }}
          className="mobile-toggle"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              onClick={handleNavSelect}
              style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.42)', zIndex: 40 }}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              onClick={(event) => event.stopPropagation()}
              style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 'min(84vw, 360px)', height: '100vh', background: '#FFFFFF', zIndex: 41, boxShadow: '-16px 0 40px rgba(2, 6, 23, 0.16)', display: 'flex', flexDirection: 'column', padding: '1rem 1rem 1.25rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 700, color: '#1E293B' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 12, background: '#34C759', color: 'white' }}>
                    <Zap size={18} />
                  </span>
                  VoltGo
                </div>
                <button aria-label="Close navigation" onClick={handleNavSelect} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0.3rem' }}>
                  <X size={22} />
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                {navItems.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={{ color: '#1E293B', fontWeight: 600, padding: '0.85rem 0.25rem', borderRadius: 10 }} onClick={handleNavSelect}>
                    {item}
                  </a>
                ))}
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Button href="#login" variant="secondary" icon={false}>Login</Button>
                <Button href="#register" icon={false}>Register</Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-actions { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}

export default Navbar;
