function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className="text-center" style={{ textAlign: align }}>
      {eyebrow && (
        <p style={{ color: '#34C759', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
          {eyebrow}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
