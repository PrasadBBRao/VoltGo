import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, CheckCircle2, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { forgotPasswordSchema } from '../modules/auth/schemas';
import AuthBrandingPanel from '../components/auth/AuthBrandingPanel';
import AuthMobileLogo from '../components/auth/AuthMobileLogo';
import AuthSubmitButton from '../components/auth/AuthSubmitButton';

const forgotFeatures = [
  { emoji: '🔐', title: 'Secure Reset', description: 'Encrypted recovery links' },
  { emoji: '✉️', title: 'Email Delivery', description: 'Reset link in your inbox' },
  { emoji: '⚡', title: 'Quick Access', description: 'Back on the road fast' },
  { emoji: '🛡️', title: 'Account Safe', description: 'Your data stays protected' },
];

function ForgotPassword() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onBlur',
  });

  const {
    ref: emailRef,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
    name: emailName,
  } = register('email');

  const onSubmit = async (data) => {
    // Mock submission — backend integration in a later sprint
    setIsSubmitting(true);
    console.log('Forgot password form data:', data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <>
      <div
        className="auth-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        <AuthBrandingPanel
          title="We've Got You Covered."
          description="Forgot your password? No worries. Enter your email and we'll help you get back to charging smarter in no time."
          features={forgotFeatures}
        />

        <div className="auth-form-column" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <AuthMobileLogo />

          <div
            style={{
              background: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: 24,
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '0 12px 36px rgba(2, 6, 23, 0.04)',
            }}
          >
            {isSuccess ? (
              <div style={{ textAlign: 'center' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(52, 199, 89, 0.12)',
                    color: '#34C759',
                    marginBottom: '1.25rem',
                  }}
                >
                  <CheckCircle2 size={36} strokeWidth={2} />
                </span>

                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    margin: '0 0 0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  Password reset link sent successfully!
                </h2>

                <p
                  style={{
                    fontSize: '1rem',
                    color: '#64748B',
                    lineHeight: 1.6,
                    margin: '0 0 1.75rem',
                  }}
                >
                  Please check your email. If an account exists for this address, you&apos;ll receive a
                  password reset link shortly.
                </p>

                <Link
                  to="/login"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    color: '#34C759',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'opacity 180ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  <ArrowLeft size={18} />
                  Back to Login
                </Link>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '2rem' }}>
                  <h2
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      margin: '0 0 0.5rem',
                    }}
                  >
                    Forgot your password?
                  </h2>
                  <p style={{ fontSize: '1rem', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                    Enter your email address and we&apos;ll send you a password reset link.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="forgot-email"
                      style={{
                        display: 'block',
                        fontWeight: 600,
                        color: '#0F172A',
                        marginBottom: '0.5rem',
                        fontSize: '0.95rem',
                      }}
                    >
                      Email Address
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
                          color: errors.email ? '#EF4444' : '#94A3B8',
                          pointerEvents: 'none',
                        }}
                      >
                        <Mail size={18} />
                      </span>
                      <input
                        id="forgot-email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        disabled={isSubmitting}
                        name={emailName}
                        ref={emailRef}
                        onChange={onEmailChange}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem 0.85rem 2.75rem',
                          border: `1px solid ${errors.email ? '#EF4444' : '#E5E7EB'}`,
                          borderRadius: 12,
                          fontSize: '1rem',
                          transition: 'border-color 180ms ease, box-shadow 180ms ease',
                          outline: 'none',
                          boxShadow: errors.email ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none',
                          background: isSubmitting ? '#F8FAFC' : 'white',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#34C759';
                          e.target.style.boxShadow = '0 0 0 3px rgba(52, 199, 89, 0.1)';
                        }}
                        onBlur={(e) => {
                          onEmailBlur(e);
                          e.target.style.borderColor = errors.email ? '#EF4444' : '#E5E7EB';
                          e.target.style.boxShadow = errors.email
                            ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
                            : 'none';
                        }}
                      />
                    </div>
                    {errors.email && (
                      <p style={{ color: '#EF4444', fontSize: '0.85rem', margin: '0.5rem 0 0' }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <AuthSubmitButton loading={isSubmitting} disabled={isSubmitting}>
                    <Send size={18} />
                    Send Reset Link
                  </AuthSubmitButton>
                </form>

                <div
                  style={{
                    marginTop: '1.5rem',
                    textAlign: 'center',
                    borderTop: '1px solid #E5E7EB',
                    paddingTop: '1.5rem',
                  }}
                >
                  <Link
                    to="/login"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#34C759',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      transition: 'opacity 180ms ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                  >
                    <ArrowLeft size={18} />
                    Back to Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
