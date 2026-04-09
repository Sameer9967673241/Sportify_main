import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname;
    if (path.includes('student/')) return 'Profile';
    if (path.includes('students')) return 'Students';
    if (path.includes('attendance')) return 'Attendance';
    if (path.includes('schedule')) return 'Schedule';
    return '';
  };

  const title = getTitle();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-10 px-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 text-white rounded-md flex items-center justify-center font-bold italic text-lg shadow-sm">
          S
        </div>
        <div className="flex flex-col">
          <h1 className="text-[17px] font-bold text-gray-900 leading-tight tracking-tight">Sportify</h1>
          {title && <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wide leading-tight">{title}</span>}
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-sm font-medium text-gray-700 hidden sm:block">
          {user?.name}
        </div>
        <button 
          onClick={logout}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
