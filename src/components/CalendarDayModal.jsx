import { X } from 'lucide-react';

const CalendarDayModal = ({ isOpen, onClose, date, summary }) => {
  if (!isOpen) return null;

  // Mock list for the specific date
  const mockStudents = [
    { id: 1, name: 'Aarav Sharma', status: summary?.badSession ? 'absent' : 'present' },
    { id: 2, name: 'Priya Patel', status: 'present' },
    { id: 3, name: 'Rohan Gupta', status: summary?.majority === 'absent' ? 'absent' : 'present' },
    { id: 4, name: 'Kavita Singh', status: 'absent' }
  ];

  const dateString = new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col shadow-xl animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{dateString}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-gray-50 text-gray-500 hover:text-gray-900 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="overflow-y-auto p-4 space-y-3">
          {mockStudents.map(student => (
            <div key={student.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="font-medium text-gray-800">{student.name}</span>
              <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                student.status === 'present' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {student.status.charAt(0)}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default CalendarDayModal;
