import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CityDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/dashboard/stats');
      setStats(res.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading dashboard...</p>;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.logo}>🏛 CivicConnect</h2>
        <div style={styles.headerRight}>
          <button style={styles.navBtn} onClick={() => navigate('/issues')}>🗺 Issues</button>
          <span style={styles.userName}>👋 {user?.name}</span>
          <button style={styles.logoutBtn} onClick={() => { logout(); navigate('/login'); }}>Logout</button>
        </div>
      </div>

      <div style={styles.content}>
        <h3 style={styles.pageTitle}>📊 City Health Dashboard</h3>

        {/* Stats Cards */}
        <div style={styles.statsGrid}>
          <div style={{...styles.statCard, borderTop: '4px solid #1A56DB'}}>
            <h1 style={styles.statNumber}>{stats?.totalIssues}</h1>
            <p style={styles.statLabel}>Total Issues</p>
          </div>
          <div style={{...styles.statCard, borderTop: '4px solid #EF4444'}}>
            <h1 style={styles.statNumber}>{stats?.openIssues}</h1>
            <p style={styles.statLabel}>Open Issues</p>
          </div>
          <div style={{...styles.statCard, borderTop: '4px solid #F59E0B'}}>
            <h1 style={styles.statNumber}>{stats?.inProgressIssues}</h1>
            <p style={styles.statLabel}>In Progress</p>
          </div>
          <div style={{...styles.statCard, borderTop: '4px solid #10B981'}}>
            <h1 style={styles.statNumber}>{stats?.resolvedIssues}</h1>
            <p style={styles.statLabel}>Resolved</p>
          </div>
        </div>

        {/* Resolution Rate */}
        <div style={styles.rateCard}>
          <h3 style={styles.rateTitle}>City Resolution Rate</h3>
          <div style={styles.progressBar}>
            <div style={{
              ...styles.progressFill,
              width: `${stats?.resolutionRate}%`,
              backgroundColor: stats?.resolutionRate > 50 ? '#10B981' : '#F59E0B'
            }}/>
          </div>
          <p style={styles.rateText}>{stats?.resolutionRate}% of issues resolved</p>
        </div>

        {/* Category Breakdown */}
        <div style={styles.categoryCard}>
          <h3 style={styles.rateTitle}>Issues by Category</h3>
          {stats?.categoryStats.map(cat => (
            <div key={cat._id} style={styles.categoryRow}>
              <span style={styles.categoryName}>{cat._id.toUpperCase()}</span>
              <div style={styles.categoryBar}>
                <div style={{
                  ...styles.categoryFill,
                  width: `${(cat.count / stats.totalIssues) * 100}%`
                }}/>
              </div>
              <span style={styles.categoryCount}>{cat.count}</span>
            </div>
          ))}
        </div>

        {/* Total Users */}
        <div style={styles.usersCard}>
          <h1 style={styles.statNumber}>{stats?.totalUsers}</h1>
          <p style={styles.statLabel}>Registered Citizens</p>
        </div>

        <button style={styles.issuesBtn} onClick={() => navigate('/issues')}>
          View All Issues →
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { minHeight: '100vh', width: '100%', backgroundColor: '#f0f4f8' },
  header: { backgroundColor: '#1A56DB', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', boxSizing: 'border-box' },
  logo: { color: 'white', margin: 0 },
  headerRight: { display: 'flex', alignItems: 'center', gap: '1rem' },
  userName: { color: 'white' },
  navBtn: { padding: '0.4rem 1rem', backgroundColor: 'transparent', color: 'white', border: '1px solid white', borderRadius: '6px', cursor: 'pointer' },
  logoutBtn: { padding: '0.4rem 1rem', backgroundColor: 'transparent', color: 'white', border: '1px solid white', borderRadius: '6px', cursor: 'pointer' },
  content: { width: '100%', padding: '2rem', boxSizing: 'border-box' },
  pageTitle: { color: '#1E293B', marginBottom: '1.5rem' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' },
  statCard: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' },
  statNumber: { margin: 0, color: '#1E293B', fontSize: '2.5rem' },
  statLabel: { margin: '0.5rem 0 0 0', color: '#64748B', fontSize: '0.9rem' },
  rateCard: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' },
  rateTitle: { margin: '0 0 1rem 0', color: '#1E293B' },
  progressBar: { backgroundColor: '#E2E8F0', borderRadius: '8px', height: '20px', overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: '8px', transition: 'width 0.5s ease' },
  rateText: { textAlign: 'center', color: '#64748B', marginTop: '0.5rem' },
  categoryCard: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' },
  categoryRow: { display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' },
  categoryName: { width: '100px', fontSize: '0.8rem', fontWeight: 'bold', color: '#64748B' },
  categoryBar: { flex: 1, backgroundColor: '#E2E8F0', borderRadius: '4px', height: '12px', overflow: 'hidden' },
  categoryFill: { height: '100%', backgroundColor: '#1A56DB', borderRadius: '4px' },
  categoryCount: { width: '30px', textAlign: 'right', color: '#64748B', fontSize: '0.9rem' },
  usersCard: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', marginBottom: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' },
  issuesBtn: { width: '100%', padding: '0.75rem', backgroundColor: '#1A56DB', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }
};

export default CityDashboard;