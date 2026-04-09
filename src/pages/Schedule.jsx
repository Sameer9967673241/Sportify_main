import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Clock, Users } from 'lucide-react';
import toast from 'react-hot-toast';

const mockSchedules = [
  { id: 1, batch: 'Morning (U-15)', days: 'Mon, Wed, Fri', time: '06:00 AM - 08:00 AM' },
  { id: 2, batch: 'Evening (U-13)', days: 'Tue, Thu, Sat', time: '04:00 PM - 06:00 PM' },
  { id: 3, batch: 'Weekend (U-11)', days: 'Saturday, Sunday', time: '08:00 AM - 10:00 AM' }
];

const Schedule = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  const [schedules] = useState(mockSchedules);

  return (
    <div className="pb-8">
      {isAdmin && (
        <div className="flex justify-between items-center mb-6 mt-2">
          <p className="text-gray-500 text-sm">Manage when batches practice.</p>
          <button className="text-blue-600 text-sm font-semibold hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
            + Add Batch
          </button>
        </div>
      )}
      
      {!isAdmin && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
          <p className="text-sm text-blue-800 font-medium">This is the official practice schedule. Please arrive 10 minutes early.</p>
        </div>
      )}

      <div className="space-y-4">
        {schedules.map((sched) => (
          <div key={sched.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                  <Users size={16} />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">{sched.batch}</h3>
              </div>
              {isAdmin && (
                <button 
                  onClick={() => toast('Edit feature coming soon')}
                  className="text-gray-400 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  Edit
                </button>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-2.5 rounded-xl">
                <Clock size={18} className="text-gray-400" />
                <span className="font-medium text-sm">{sched.days}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-2.5 rounded-xl">
                <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div> {/* Dummy icon */}
                <span className="font-medium text-sm">{sched.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
