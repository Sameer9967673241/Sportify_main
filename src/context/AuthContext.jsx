import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing token on load
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch(e) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    // Basic mock authentication login
    let mockUser = null;
    let mockToken = null;

    if (email === 'admin@sportify.com' && password === 'admin123') {
      mockUser = { id: 1, name: 'Admin User', email: 'admin@sportify.com', role: 'admin' };
      mockToken = 'mock_jwt_token_admin_12345';
    } 
    else if (email === 'student@sportify.com' && password === 'student123') {
      mockUser = { id: 2, name: 'Student Demo', email: 'student@sportify.com', role: 'student' };
      mockToken = 'mock_jwt_token_student_12345';
    }

    if (mockUser) {
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
      toast.success('Successfully logged in!');
      
      const redirectPath = mockUser.role === 'admin' ? '/dashboard' : '/my-dashboard';
      navigate(redirectPath);
      return true;
    }
    
    toast.error('Invalid email or password');
    return false;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
