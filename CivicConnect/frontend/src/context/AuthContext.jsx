import { createContext, useState, useContext, useEffect } from 'react';
import { loginUser, registerUser, getMe } from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const data = await getMe(token);
          setUser(data.user);
        } catch {
          setToken(null);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [token]);

  const register = async (formData) => {
    const data = await registerUser(formData);
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const login = async (formData) => {
    const data = await loginUser(formData);
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);