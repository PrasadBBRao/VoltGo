import { Check } from 'lucide-react';
import { getPasswordStrength } from '../../modules/auth/passwordStrength';

const requirementItems = [
  { key: 'length', label: 'At least 8 characters' },
  { key: 'uppercase', label: 'One uppercase letter' },
  { key: 'lowercase', label: 'One lowercase letter' },
  { key: 'number', label: 'One number' },
  { key: 'special', label: 'One special character (!@#$%^&*...)' },
];

function PasswordStrength({ password, showRequirements = true }) {
  if (!password) return null;

  const { score, label, color, requirements } = getPasswordStrength(password);
  const fillPercent = Math.max((score / 5) * 100, score > 0 ? 20 : 0);

  return (
    <div
      style={{
        marginTop: '0.75rem',
        padding: '1rem',
        background: '#F8FAFC',
        borderRadius: 12,
        border: '1px solid #E5E7EB',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          marginBottom: '0.55rem',
        }}
      >
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0F172A' }}>
          Password strength
        </span>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color }}>{label}</span>
      </div>

      <div
        style={{
          height: 8,
          borderRadius: 999,
          background: '#E5E7EB',
          overflow: 'hidden',
          marginBottom: showRequirements ? '0.75rem' : 0,
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={score}
        aria-label={`Password strength: ${label}`}
      >
        <div
          style={{
            height: '100%',
            width: `${fillPercent}%`,
            background: color,
            borderRadius: 999,
            transition: 'width 180ms ease, background-color 180ms ease',
          }}
        />
      </div>

      {showRequirements && (
        <>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.5rem' }}>
            Password Requirements:
          </div>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            {requirementItems.map((item) => {
              const met = requirements[item.key];
              return (
                <div
                  key={item.key}
                  style={{
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: met ? '#34C759' : '#64748B',
                  }}
                >
                  <Check size={14} style={{ opacity: met ? 1 : 0.3 }} />
                  {item.label}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default PasswordStrength;
