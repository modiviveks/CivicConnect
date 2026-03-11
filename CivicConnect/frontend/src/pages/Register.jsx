import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'citizen'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await register(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🏛 CivicConnect</h2>
        <h3 style={styles.subtitle}>Create Account</h3>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input style={styles.input} type="text" name="name"
            placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input style={styles.input} type="email" name="email"
            placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input style={styles.input} type="password" name="password"
            placeholder="Password (min 6 chars)" value={formData.password} onChange={handleChange} required />
          <select style={styles.input} name="role" value={formData.role} onChange={handleChange}>
            <option value="citizen">Citizen</option>
            <option value="resolver">Resolver</option>
          </select>
          <button style={styles.button} type="submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </form>
        <p style={styles.link}>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

const styles = {
  container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4f8' },
  card: { backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' },
  title: { textAlign: 'center', color: '#1A56DB', marginBottom: '0.5rem' },
  subtitle: { textAlign: 'center', color: '#64748B', marginBottom: '1.5rem' },
  input: { width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1rem', boxSizing: 'border-box' },
  button: { width: '100%', padding: '0.75rem', backgroundColor: '#1A56DB', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' },
  error: { color: 'red', marginBottom: '1rem', textAlign: 'center' },
  link: { textAlign: 'center', marginTop: '1rem', color: '#64748B' }
};

export default Register;