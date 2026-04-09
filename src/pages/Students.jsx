import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Phone } from 'lucide-react';
import AddStudentModal from '../components/AddStudentModal';

const mockStudents = [
  { id: 1, name: 'Aarav Sharma', age: 14, parent: 'Rajesh Sharma', phone: '+91 9876543210', batch: 'Morning (U-15)', feesDue: false },
  { id: 2, name: 'Priya Patel', age: 12, parent: 'Amit Patel', phone: '+91 9876543211', batch: 'Evening (U-13)', feesDue: true },
  { id: 3, name: 'Rohan Gupta', age: 16, parent: 'Sanjay Gupta', phone: '+91 9876543212', batch: 'Morning (U-17)', feesDue: false },
  { id: 4, name: 'Kavita Singh', age: 10, parent: 'Vikram Singh', phone: '+91 9876543213', batch: 'Weekend (U-11)', feesDue: true }
];

const Students = () => {
  const [search, setSearch] = useState('');
  const [students, setStudents] = useState(mockStudents);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddStudent = (newStudent) => {
    setStudents(prev => [newStudent, ...prev]);
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.parent.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-20">
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
          placeholder="Search by student or parent name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {filteredStudents.map((student) => (
          <div 
            key={student.id} 
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between active:scale-[0.98] transition-transform"
            onClick={() => navigate(`/student/${student.id}`)}
          >
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">{student.name}</h3>
              <div className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                <span>{student.batch}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <span className={`px-2 py-1 text-xs rounded-lg font-medium ${student.feesDue ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {student.feesDue ? 'Fees Due' : 'Paid'}
              </span>
              <button 
                onClick={(e) => { e.stopPropagation(); window.location.href = `tel:${student.phone}`; }}
                className="p-2 text-blue-500 bg-blue-50 rounded-full"
              >
                <Phone size={16} />
              </button>
            </div>
          </div>
        ))}
        {filteredStudents.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No students found.
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsAddModalOpen(true)}
        className="fixed bottom-20 right-4 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-200 active:scale-95 transition-transform z-10"
      >
        <Plus size={28} />
      </button>

      {/* Modals */}
      <AddStudentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddStudent}
      />
    </div>
  );
};

export default Students;
