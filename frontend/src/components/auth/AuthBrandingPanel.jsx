import { Zap } from 'lucide-react';

const defaultFeatures = [
  { emoji: '⚡', title: 'Fast Charging', description: 'Ultra-fast chargers nearby' },
  { emoji: '🔒', title: 'Secure Booking', description: 'Protected transactions' },
  { emoji: '📍', title: 'Find Nearby', description: 'Locate stations instantly' },
  { emoji: '🚗', title: 'EV Ready', description: 'All charger types supported' },
];

/**
 * Desktop-only branding column for authentication pages.
 * Hidden below the md breakpoint via `.auth-branding` in AuthLayout.
 */
function AuthBrandingPanel({
  title = 'Charge Smart. Drive Further.',
  description = 'Join thousands of EV drivers who trust VoltGo for seamless charging experiences. Find stations, book instantly, and power your journey.',
  features = defaultFeatures,
}) {
  return (
    <div className="auth-branding" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 48,
              height: 48,
              borderRadius: 12,
              background: '#34C759',
              color: 'white',
            }}
          >
            <Zap size={26} />
          </span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
            VoltGo
          </h2>
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 800,
            color: '#0F172A',
            lineHeight: 1.1,
            margin: '0 0 1rem',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: '1.05rem',
            color: '#64748B',
            lineHeight: 1.6,
            margin: 0,
            maxWidth: '520px',
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            style={{
              padding: '1.2rem',
              background: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: 16,
              boxShadow: '0 4px 12px rgba(2, 6, 23, 0.04)',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{feature.emoji}</div>
            <div style={{ fontWeight: 600, color: '#0F172A', marginBottom: '0.3rem' }}>
              {feature.title}
            </div>
            <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AuthBrandingPanel;
