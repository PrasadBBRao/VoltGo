import { Eye, EyeOff, Lock } from 'lucide-react';

function AuthPasswordField({
  id,
  label,
  placeholder,
  error,
  disabled = false,
  visible,
  onToggleVisibility,
  autoComplete = 'new-password',
  registration,
}) {
  const { ref, onChange, onBlur, name } = registration;

  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontWeight: 600,
          color: '#0F172A',
          marginBottom: '0.5rem',
          fontSize: '0.95rem',
        }}
      >
        {label}
      </label>

      <div style={{ position: 'relative' }}>
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'inline-flex',
            color: error ? '#EF4444' : '#94A3B8',
            pointerEvents: 'none',
          }}
        >
          <Lock size={18} />
        </span>

        <input
          id={id}
          type={visible ? 'text' : 'password'}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          ref={ref}
          onChange={onChange}
          style={{
            width: '100%',
            padding: '0.85rem 2.75rem 0.85rem 2.75rem',
            border: `1px solid ${error ? '#EF4444' : '#E5E7EB'}`,
            borderRadius: 12,
            fontSize: '1rem',
            transition: 'border-color 180ms ease, box-shadow 180ms ease',
            outline: 'none',
            boxShadow: error ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none',
            background: disabled ? '#F8FAFC' : 'white',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#34C759';
            e.target.style.boxShadow = '0 0 0 3px rgba(52, 199, 89, 0.1)';
          }}
          onBlur={(e) => {
            onBlur(e);
            e.target.style.borderColor = error ? '#EF4444' : '#E5E7EB';
            e.target.style.boxShadow = error ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none';
          }}
        />

        <button
          type="button"
          onClick={onToggleVisibility}
          aria-label={visible ? `Hide ${label}` : `Show ${label}`}
          disabled={disabled}
          style={{
            position: 'absolute',
            right: '0.85rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            color: '#64748B',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            transition: 'color 180ms ease',
          }}
          onMouseEnter={(e) => {
            if (!disabled) e.currentTarget.style.color = '#34C759';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#64748B';
          }}
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && (
        <p style={{ color: '#EF4444', fontSize: '0.85rem', margin: '0.5rem 0 0' }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default AuthPasswordField;
