import { NavLink } from 'react-router-dom';
import { Users, CalendarCheck, CalendarDays } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const BottomNav = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 px-2 py-2 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <ul className="flex justify-around items-center h-14">
        {isAdmin && (
          <>
            <NavItem to="/students" icon={<Users size={24} />} label="Students" />
            <NavItem to="/attendance" icon={<CalendarCheck size={24} />} label="Attendance" />
            <NavItem to="/schedule" icon={<CalendarDays size={24} />} label="Schedule" />
          </>
        )}
        {!isAdmin && (
          <>
            <NavItem to="/student/me" icon={<Users size={24} />} label="My Profile" />
            <NavItem to="/schedule" icon={<CalendarDays size={24} />} label="Schedule" />
          </>
        )}
      </ul>
    </nav>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => 
          `flex flex-col items-center justify-center w-16 h-full transition-colors ${
            isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
          }`
        }
      >
        <div className="mb-0.5">{icon}</div>
        <span className="text-[10px] font-medium">{label}</span>
      </NavLink>
    </li>
  );
};

export default BottomNav;
