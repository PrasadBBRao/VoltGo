import { Zap } from 'lucide-react';

/** VoltGo mark shown above the auth card on mobile (desktop branding is hidden). */
function AuthMobileLogo({ alwaysVisible = false }) {
  return (
    <div
      className={alwaysVisible ? undefined : 'auth-mobile-logo'}
      style={
        alwaysVisible
          ? {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
            }
          : undefined
      }
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 44,
          height: 44,
          borderRadius: 12,
          background: '#34C759',
          color: 'white',
        }}
      >
        <Zap size={24} />
      </span>
      <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
        VoltGo
      </h2>
    </div>
  );
}

export default AuthMobileLogo;
