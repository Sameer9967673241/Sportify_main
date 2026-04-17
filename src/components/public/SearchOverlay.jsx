import { X, Search, ChevronRight, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/sports?search=${encodeURIComponent(searchTerm.trim())}`);
      onClose();
    }
  };

  const quickLinks = ['Football', 'Basketball', 'Gymnastics', 'Swimming', 'Tennis'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-900/95 backdrop-blur-3xl animate-in fade-in duration-500"
        onClick={onClose}
      ></div>

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-10 right-10 p-4 text-white/40 hover:text-white transition-all hover:rotate-90 duration-500 z-[210]"
      >
        <X size={40} className="stroke-[1.5]" />
      </button>

      {/* Search Content */}
      <div className="relative z-[210] w-full max-w-4xl animate-in zoom-in-95 fade-in duration-500 delay-100 px-6">
        <form onSubmit={handleSearch} className="relative group">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-primary-500 group-focus-within:scale-110 transition-transform duration-500">
            <Search size={48} className="stroke-[3]" />
          </div>
          <input
            autoFocus
            type="text"
            placeholder="Search venue or sport..."
            className="w-full bg-transparent border-b-4 border-white/10 py-8 pl-20 pr-10 text-4xl md:text-6xl text-white placeholder-white/10 font-black focus:outline-none focus:border-primary-500 transition-all duration-500 tracking-tight"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <div className="mt-16 animate-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="flex items-center gap-3 text-white/30 text-xs font-black uppercase tracking-[0.3em] mb-8">
            <TrendingUp size={16} />
            Trending Categories
          </div>
          <div className="flex flex-wrap gap-4">
            {quickLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setSearchTerm(link);
                  navigate(`/sports?search=${encodeURIComponent(link)}`);
                  onClose();
                }}
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-primary-600 hover:border-primary-500 transition-all duration-300 shadow-xl"
              >
                {link}
                <ChevronRight size={18} className="text-white/20 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center text-white/20 font-black text-xs uppercase tracking-widest hidden md:block">
          Press <span className="px-2 py-1 rounded bg-white/5 mx-1 border border-white/10 text-white/40">ESC</span> to Close
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
