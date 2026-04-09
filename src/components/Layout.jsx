import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden font-sans">
      <Header />
      
      {/* Main Content Area - padded to avoid overlap with fixed Header/BottomNav */}
      <main className="flex-1 overflow-y-auto mt-16 mb-20 p-4">
        <div className="max-w-3xl mx-auto">
          <Outlet />
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Layout;
