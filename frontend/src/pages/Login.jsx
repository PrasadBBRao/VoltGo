import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function Login() {
  return (
    <div className="app-shell">
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>Login</h1>
          <p style={{ color: '#666', marginTop: '1rem' }}>Login page - Placeholder for Sprint 2</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
