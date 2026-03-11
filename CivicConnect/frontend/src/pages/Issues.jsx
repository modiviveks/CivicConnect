import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Issues = () => {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '', description: '', category: 'pothole', urgency: 'medium', location: ''
  });

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/issues');
      setIssues(res.data.issues);
    } catch (error) {
      console.error('Error fetching issues:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/issues', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setShowForm(false);
      setFormData({ title: '', description: '', category: 'pothole', urgency: 'medium', location: '' });
      fetchIssues();
    } catch (error) {
      console.error('Error creating issue:', error);
    }
  };

  const statusColor = (status) => {
    if (status === 'open') return '#EF4444';
    if (status === 'in_progress') return '#F59E0B';
    if (status === 'resolved') return '#10B981';
    return '#64748B';
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.logo}>🏛 CivicConnect</h2>
        <div style={styles.headerRight}>
          <span style={styles.userName}>👋 {user?.name}</span>
          <button style={styles.logoutBtn} onClick={() => { logout(); navigate('/login'); }}>Logout</button>
        </div>
      </div>

      {/* Report Button */}
      <div style={styles.content}>
        <div style={styles.topBar}>
          <h3 style={styles.pageTitle}>Community Issues</h3>
          <button style={styles.reportBtn} onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : '+ Report Issue'}
          </button>
        </div>

        {/* Report Form */}
        {showForm && (
          <div style={styles.form}>
            <h4 style={styles.formTitle}>Report a New Issue</h4>
            <form onSubmit={handleSubmit}>
              <input style={styles.input} type="text" placeholder="Title"
                value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
              <textarea style={{...styles.input, height: '80px'}} placeholder="Description"
                value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
              <select style={styles.input} value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}>
                <option value="pothole">Pothole</option>
                <option value="streetlight">Streetlight</option>
                <option value="garbage">Garbage</option>
                <option value="water">Water</option>
                <option value="other">Other</option>
              </select>
              <select style={styles.input} value={formData.urgency}
                onChange={e => setFormData({...formData, urgency: e.target.value})}>
                <option value="low">Low Urgency</option>
                <option value="medium">Medium Urgency</option>
                <option value="high">High Urgency</option>
              </select>
              <input style={styles.input} type="text" placeholder="Location (e.g. MG Road, Bengaluru)"
                value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} required />
              <button style={styles.submitBtn} type="submit">Submit Issue</button>
            </form>
          </div>
        )}

        {/* Issues List */}
        {loading ? (
          <p style={styles.loading}>Loading issues...</p>
        ) : issues.length === 0 ? (
          <p style={styles.loading}>No issues reported yet. Be the first!</p>
        ) : (
          issues.map(issue => (
            <div key={issue._id} style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.category}>{issue.category.toUpperCase()}</span>
                <span style={{...styles.status, backgroundColor: statusColor(issue.status)}}>
                  {issue.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>
              <h4 style={styles.issueTitle}>{issue.title}</h4>
              <p style={styles.issueDesc}>{issue.description}</p>
              <div style={styles.cardFooter}>
                <span style={styles.meta}>📍 {issue.location.address}</span>
                <span style={styles.meta}>👤 {issue.reporter?.name}</span>
                <span style={styles.meta}>⬆️ {issue.upvotes.length}</span>
                <span style={{...styles.urgency, color: issue.urgency === 'high' ? '#EF4444' : issue.urgency === 'medium' ? '#F59E0B' : '#10B981'}}>
                  {issue.urgency.toUpperCase()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#f0f4f8' },
  header: { backgroundColor: '#1A56DB', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { color: 'white', margin: 0 },
  headerRight: { display: 'flex', alignItems: 'center', gap: '1rem' },
  userName: { color: 'white' },
  logoutBtn: { padding: '0.4rem 1rem', backgroundColor: 'transparent', color: 'white', border: '1px solid white', borderRadius: '6px', cursor: 'pointer' },
  content: { maxWidth: '800px', margin: '0 auto', padding: '2rem' },
  topBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' },
  pageTitle: { margin: 0, color: '#1E293B' },
  reportBtn: { padding: '0.6rem 1.2rem', backgroundColor: '#1A56DB', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem' },
  form: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' },
  formTitle: { margin: '0 0 1rem 0', color: '#1E293B' },
  input: { width: '100%', padding: '0.7rem', marginBottom: '0.8rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1rem', boxSizing: 'border-box' },
  submitBtn: { width: '100%', padding: '0.75rem', backgroundColor: '#10B981', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' },
  loading: { textAlign: 'center', color: '#64748B', marginTop: '2rem' },
  card: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', marginBottom: '1rem', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' },
  category: { backgroundColor: '#EFF6FF', color: '#1A56DB', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' },
  status: { color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' },
  issueTitle: { margin: '0.5rem 0', color: '#1E293B' },
  issueDesc: { color: '#64748B', margin: '0 0 1rem 0', fontSize: '0.9rem' },
  cardFooter: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  meta: { color: '#64748B', fontSize: '0.85rem' },
  urgency: { fontSize: '0.85rem', fontWeight: 'bold' }
};

export default Issues;