import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Button({ children, variant = 'primary', href, to, className = '', icon = true, ...props }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  // Use React Router Link if 'to' prop is provided (internal routes)
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
        {icon && <ArrowRight size={18} />}
      </Link>
    );
  }

  // Use regular anchor tag for external links
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
