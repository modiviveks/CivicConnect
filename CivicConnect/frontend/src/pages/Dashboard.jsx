import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🏛 CivicConnect</h2>
        <h3 style={styles.welcome}>Welcome, {user?.name}! 👋</h3>
        <div style={styles.infoBox}>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Role:</strong> {user?.role}</p>
          <p><strong>Points:</strong> {user?.points}</p>
        </div>
        <p style={styles.message}>You're successfully logged in! 🎉</p>
        <p style={styles.message}>Issue reporting features coming in Session 2!</p>
        <button style={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4f8' },
  card: { backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' },
  title: { textAlign: 'center', color: '#1A56DB', marginBottom: '0.5rem' },
  welcome: { textAlign: 'center', color: '#1E293B', marginBottom: '1.5rem' },
  infoBox: { backgroundColor: '#f0f4f8', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' },
  message: { textAlign: 'center', color: '#64748B', marginBottom: '0.5rem' },
  button: { width: '100%', padding: '0.75rem', backgroundColor: '#EF4444', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', marginTop: '1rem' }
};

export default Dashboard;