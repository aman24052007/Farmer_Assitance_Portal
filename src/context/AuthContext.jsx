import { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved token and user data
    const token = localStorage.getItem('userToken');
    const savedUser = localStorage.getItem('userData');
    
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const { data } = await api.post('/users/login', { username, password });
      localStorage.setItem('userToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data));
      setUser(data);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed',
      };
    }
  };

  const register = async (userData) => {
    try {
      const { data } = await api.post('/users', userData);
      localStorage.setItem('userToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data));
      setUser(data);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Registration failed',
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    setUser(null);
  };

  const updateProfile = async (profileData) => {
    try {
      const { data } = await api.put('/users/profile', profileData);
      localStorage.setItem('userData', JSON.stringify(data));
      setUser(data);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Profile update failed',
      };
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    register,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};