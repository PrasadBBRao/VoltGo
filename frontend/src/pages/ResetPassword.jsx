import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, CheckCircle2, KeyRound } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { resetPasswordSchema } from '../modules/auth/schemas';
import AuthBrandingPanel from '../components/auth/AuthBrandingPanel';
import AuthMobileLogo from '../components/auth/AuthMobileLogo';
import AuthPasswordField from '../components/auth/AuthPasswordField';
import AuthSubmitButton from '../components/auth/AuthSubmitButton';
import PasswordStrength from '../components/auth/PasswordStrength';

const resetFeatures = [
  { emoji: '🔐', title: 'Secure Reset', description: 'Encrypted recovery flow' },
  { emoji: '🛡️', title: 'Strong Passwords', description: 'Built-in strength checks' },
  { emoji: '⚡', title: 'Quick Access', description: 'Back to charging fast' },
  { emoji: '✅', title: 'Account Safe', description: 'Your data stays protected' },
];

function ResetPassword() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onBlur',
  });

  const newPassword = watch('newPassword');

  const onSubmit = async (data) => {
    // Mock submission — backend integration in a later sprint
    setIsSubmitting(true);
    console.log('Reset password form data:', data);

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
          title="Create a Stronger Password."
          description="Choose a new secure password for your VoltGo account and get back to finding chargers, booking slots, and powering your journey."
          features={resetFeatures}
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
                  Password reset successfully!
                </h2>

                <p
                  style={{
                    fontSize: '1rem',
                    color: '#64748B',
                    lineHeight: 1.6,
                    margin: '0 0 1.75rem',
                  }}
                >
                  Your password has been updated successfully. You can now sign in using your new
                  password.
                </p>

                <AuthSubmitButton type="button" onClick={() => navigate('/login')}>
                  Go to Login
                </AuthSubmitButton>
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
                    Reset your password
                  </h2>
                  <p style={{ fontSize: '1rem', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                    Create a new secure password for your VoltGo account.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  noValidate
                >
                  <div>
                    <AuthPasswordField
                      id="reset-new-password"
                      label="New Password"
                      placeholder="Create a strong password"
                      error={errors.newPassword?.message}
                      disabled={isSubmitting}
                      visible={showNewPassword}
                      onToggleVisibility={() => setShowNewPassword((prev) => !prev)}
                      registration={register('newPassword')}
                    />
                    <PasswordStrength password={newPassword} />
                  </div>

                  <AuthPasswordField
                    id="reset-confirm-password"
                    label="Confirm Password"
                    placeholder="Confirm your new password"
                    error={errors.confirmPassword?.message}
                    disabled={isSubmitting}
                    visible={showConfirmPassword}
                    onToggleVisibility={() => setShowConfirmPassword((prev) => !prev)}
                    registration={register('confirmPassword')}
                  />

                  <AuthSubmitButton loading={isSubmitting} disabled={isSubmitting}>
                    <KeyRound size={18} />
                    Reset Password
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

export default ResetPassword;
