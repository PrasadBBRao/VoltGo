const SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>]/;

/**
 * Shared password strength evaluation used by Register and Reset Password.
 */
export function getPasswordStrength(password = '') {
  if (!password) {
    return {
      score: 0,
      label: '',
      color: '#E5E7EB',
      requirements: {
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false,
      },
    };
  }

  const requirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: SPECIAL_CHAR_REGEX.test(password),
  };

  const score = Object.values(requirements).filter(Boolean).length;

  const levels = [
    { min: 0, label: 'Weak', color: '#EF4444' },
    { min: 2, label: 'Fair', color: '#F59E0B' },
    { min: 3, label: 'Good', color: '#3B82F6' },
    { min: 4, label: 'Strong', color: '#34C759' },
  ];

  const level = [...levels].reverse().find((entry) => score >= entry.min) || levels[0];

  return {
    score,
    label: level.label,
    color: level.color,
    requirements,
  };
}

export { SPECIAL_CHAR_REGEX };
