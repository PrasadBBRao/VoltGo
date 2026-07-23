import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Zap, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { loginSchema } from '../modules/auth/schemas';
import AuthMobileLogo from '../components/auth/AuthMobileLogo';
import SocialAuthButtons from '../components/ui/SocialAuthButtons';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    // Form submission logic will be added in future sprints
    console.log('Form data:', data);
  };

  return (
    <>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="auth-grid"
          >
            {/* Left Side - Welcome Content (desktop only) */}
            <div className="auth-branding" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: '#34C759',
                      color: 'white',
                    }}
                  >
                    <Zap size={26} />
                  </span>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                    VoltGo
                  </h2>
                </div>

                <h1
                  style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.1,
                    margin: '0 0 1rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Charge Smart. Drive Further.
                </h1>

                <p
                  style={{
                    fontSize: '1.05rem',
                    color: '#64748B',
                    lineHeight: 1.6,
                    margin: 0,
                    maxWidth: '520px',
                  }}
                >
                  Join thousands of EV drivers who trust VoltGo for seamless charging experiences. Find stations, book instantly, and power your journey.
                </p>
              </div>

              {/* Decorative EV-themed elements */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginTop: '1rem',
                }}
              >
                <div
                  style={{
                    padding: '1.2rem',
                    background: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: 16,
                    boxShadow: '0 4px 12px rgba(2, 6, 23, 0.04)',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                  <div style={{ fontWeight: 600, color: '#0F172A', marginBottom: '0.3rem' }}>
                    Fast Charging
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                    Ultra-fast chargers nearby
                  </p>
                </div>

                <div
                  style={{
                    padding: '1.2rem',
                    background: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: 16,
                    boxShadow: '0 4px 12px rgba(2, 6, 23, 0.04)',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔒</div>
                  <div style={{ fontWeight: 600, color: '#0F172A', marginBottom: '0.3rem' }}>
                    Secure Booking
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                    Protected transactions
                  </p>
                </div>

                <div
                  style={{
                    padding: '1.2rem',
                    background: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: 16,
                    boxShadow: '0 4px 12px rgba(2, 6, 23, 0.04)',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📍</div>
                  <div style={{ fontWeight: 600, color: '#0F172A', marginBottom: '0.3rem' }}>
                    Find Nearby
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                    Locate stations instantly
                  </p>
                </div>

                <div
                  style={{
                    padding: '1.2rem',
                    background: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: 16,
                    boxShadow: '0 4px 12px rgba(2, 6, 23, 0.04)',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚗</div>
                  <div style={{ fontWeight: 600, color: '#0F172A', marginBottom: '0.3rem' }}>
                    EV Ready
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                    All charger types supported
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Authentication Card */}
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
              <div style={{ marginBottom: '2rem' }}>
                <h2
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    margin: '0 0 0.5rem',
                  }}
                >
                  Welcome Back
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748B', margin: 0 }}>
                  Sign in to continue to VoltGo.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Email Input */}
                <div>
                  <label
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
                  <input
                    type="email"
                    placeholder="you@example.com"
                    {...register('email')}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      border: `1px solid ${errors.email ? '#EF4444' : '#E5E7EB'}`,
                      borderRadius: 12,
                      fontSize: '1rem',
                      transition: 'border-color 180ms ease, box-shadow 180ms ease',
                      outline: 'none',
                      boxShadow: errors.email ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#34C759';
                      e.target.style.boxShadow = '0 0 0 3px rgba(52, 199, 89, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.email ? '#EF4444' : '#E5E7EB';
                      e.target.style.boxShadow = errors.email ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none';
                    }}
                  />
                  {errors.email && (
                    <p style={{ color: '#EF4444', fontSize: '0.85rem', marginTop: '0.5rem', margin: 0 }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label
                      style={{
                        fontWeight: 600,
                        color: '#0F172A',
                        fontSize: '0.95rem',
                      }}
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#64748B',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'color 180ms ease',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = '#34C759')}
                      onMouseLeave={(e) => (e.target.style.color = '#64748B')}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      {...register('password')}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        border: `1px solid ${errors.password ? '#EF4444' : '#E5E7EB'}`,
                        borderRadius: 12,
                        fontSize: '1rem',
                        transition: 'border-color 180ms ease, box-shadow 180ms ease',
                        outline: 'none',
                        boxShadow: errors.password ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#34C759';
                        e.target.style.boxShadow = '0 0 0 3px rgba(52, 199, 89, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.password ? '#EF4444' : '#E5E7EB';
                        e.target.style.boxShadow = errors.password ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none';
                      }}
                    />
                  </div>
                  {errors.password && (
                    <p style={{ color: '#EF4444', fontSize: '0.85rem', marginTop: '0.5rem', margin: 0 }}>
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', userSelect: 'none' }}>
                    <input
                      type="checkbox"
                      {...register('rememberMe')}
                      style={{
                        width: 18,
                        height: 18,
                        cursor: 'pointer',
                        accentColor: '#34C759',
                      }}
                    />
                    <span style={{ fontSize: '0.95rem', color: '#64748B' }}>Remember me</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    style={{
                      color: '#34C759',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      transition: 'opacity 180ms ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
                    onMouseLeave={(e) => (e.target.style.opacity = '1')}
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.95rem 1.25rem',
                    background: '#34C759',
                    color: 'white',
                    border: 'none',
                    borderRadius: 12,
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'transform 180ms ease, box-shadow 220ms ease, background-color 180ms ease',
                    boxShadow: '0 10px 30px rgba(52, 199, 89, 0.18)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 24px rgba(52, 199, 89, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 10px 30px rgba(52, 199, 89, 0.18)';
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = '2px solid #34C759';
                    e.target.style.outlineOffset = '2px';
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = 'none';
                  }}
                >
                  <LogIn size={18} />
                  Sign In
                </button>

                {/* Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
                  <div style={{ flex: 1, height: '1px', background: '#E5E7EB' }} />
                  <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>or continue with</span>
                  <div style={{ flex: 1, height: '1px', background: '#E5E7EB' }} />
                </div>

                {/* Social authentication */}
                <SocialAuthButtons />
              </form>

              {/* Sign Up Link */}
              <div style={{ marginTop: '1.5rem', textAlign: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '1.5rem' }}>
                <span style={{ color: '#64748B', fontSize: '0.95rem' }}>
                  Don't have an account?{' '}
                  <Link
                    to="/register"
                    style={{
                      color: '#34C759',
                      fontWeight: 600,
                      transition: 'opacity 180ms ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
                    onMouseLeave={(e) => (e.target.style.opacity = '1')}
                  >
                    Sign up
                  </Link>
                </span>
              </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Login;
