import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

/**
 * Dedicated shell for authentication pages.
 * Includes Navbar only — no main website Footer or landing sections.
 */
function AuthLayout() {
  return (
    <div className="app-shell auth-shell">
      <Navbar />
      <main
        className="auth-main"
        style={{
          minHeight: 'calc(100vh - 72px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 0',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        }}
      >
        <div
          className="auth-container"
          style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}
        >
          <Outlet />
        </div>
      </main>

      <style>{`
        .auth-mobile-logo {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        @media (max-width: 900px) {
          .auth-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            max-width: 480px;
            margin: 0 auto;
          }

          .auth-branding {
            display: none !important;
          }

          .auth-mobile-logo {
            display: flex;
          }

          .auth-main {
            align-items: flex-start !important;
            padding-top: 1.5rem !important;
            padding-bottom: 2rem !important;
          }
        }

        @media (max-width: 600px) {
          .auth-grid {
            gap: 1.25rem !important;
          }

          .auth-container {
            padding: 0 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default AuthLayout;
