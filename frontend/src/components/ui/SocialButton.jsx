function SocialButton({
  provider,
  icon,
  text,
  onClick,
  type = 'button',
  disabled = false,
  style,
  ...props
}) {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-provider={provider}
      aria-label={text}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 48,
        minHeight: 48,
        padding: '0 1.25rem',
        paddingLeft: '3rem',
        background: '#FFFFFF',
        color: '#3C4043',
        border: '1px solid #DADCE0',
        borderRadius: 12,
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.2,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition:
          'background-color 180ms ease, border-color 180ms ease, box-shadow 220ms ease, transform 180ms ease',
        boxShadow: 'none',
        outline: 'none',
        ...style,
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.background = '#F8FAFC';
        e.currentTarget.style.borderColor = '#C0C4C8';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#FFFFFF';
        e.currentTarget.style.borderColor = '#DADCE0';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid #34C759';
        e.currentTarget.style.outlineOffset = '2px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none';
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: '1.1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </span>
      <span style={{ textAlign: 'center' }}>{text}</span>
    </button>
  );
}

export default SocialButton;
