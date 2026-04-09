import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Students from './pages/Students';
import Attendance from './pages/Attendance';
import Schedule from './pages/Schedule';
import StudentDetail from './pages/StudentDetail';

import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import { useAuth } from './context/AuthContext';

function IndexRedirect() {
  const { user, isLoading } = useAuth();
  if (isLoading) return null;
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={user.role === 'admin' ? '/students' : '/student/me'} replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        {/* Dynamic Index Redirect based on role */}
        <Route index element={<IndexRedirect />} />
        
        {/* Admin Routes */}
        <Route 
          path="students" 
          element={<ProtectedRoute allowedRoles={['admin']}><Students /></ProtectedRoute>} 
        />
        <Route 
          path="attendance" 
          element={<ProtectedRoute allowedRoles={['admin']}><Attendance /></ProtectedRoute>} 
        />
        <Route 
          path="schedule" 
          element={<ProtectedRoute allowedRoles={['admin', 'student']}><Schedule /></ProtectedRoute>} 
        />
        <Route 
          path="student/:id" 
          element={<ProtectedRoute allowedRoles={['admin', 'student']}><StudentDetail /></ProtectedRoute>} 
        />

      </Route>
      <Route path="*" element={<IndexRedirect />} />
    </Routes>
  );
}

export default App;
