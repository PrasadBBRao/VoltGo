function AuthSubmitButton({
  children,
  loading = false,
  disabled = false,
  type = 'submit',
  onClick,
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        width: '100%',
        padding: '0.95rem 1.25rem',
        background: '#34C759',
        color: 'white',
        border: 'none',
        borderRadius: 12,
        fontSize: '1rem',
        fontWeight: 600,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.7 : 1,
        transition: 'transform 180ms ease, box-shadow 220ms ease, background-color 180ms ease, opacity 180ms ease',
        boxShadow: '0 10px 30px rgba(52, 199, 89, 0.18)',
      }}
      onMouseEnter={(e) => {
        if (isDisabled) return;
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(52, 199, 89, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(52, 199, 89, 0.18)';
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid #34C759';
        e.currentTarget.style.outlineOffset = '2px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none';
      }}
    >
      {loading ? (
        <>
          <span
            aria-hidden="true"
            style={{
              width: 18,
              height: 18,
              border: '2px solid rgba(255,255,255,0.35)',
              borderTopColor: 'white',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'auth-spin 0.7s linear infinite',
            }}
          />
          Sending...
        </>
      ) : (
        children
      )}
      <style>{`
        @keyframes auth-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
}

export default AuthSubmitButton;
