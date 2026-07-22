import { ArrowRight } from 'lucide-react';

function Button({ children, variant = 'primary', href, className = '', icon = true, ...props }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {icon && <ArrowRight size={18} />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <ArrowRight size={18} />}
    </button>
  );
}

export default Button;
