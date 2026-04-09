import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, MapPin, Calendar, Clock, CreditCard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import StudentAttendanceHistory from '../components/StudentAttendanceHistory';

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  // Mock data fetching based on id, or returning "me" if id is "me"
  const student = {
    id: id === 'me' ? user.id : id,
    name: id === 'me' ? user.name : 'Aarav Sharma',
    age: 14,
    parentName: 'Rajesh Sharma',
    phone: '+91 9876543210',
    batch: 'Morning (U-15)',
    attendancePercentage: 85,
    feesTotal: '$500',
    feesPaid: '$300',
    feesRemaining: '$200',
    schedule: 'Mon, Wed, Fri - 6 AM to 8 AM',
    history: [
      { date: '2026-04-08', status: 'present' },
      { date: '2026-04-06', status: 'present' },
      { date: '2026-04-03', status: 'absent' },
      { date: '2026-04-01', status: 'present' },
      { date: '2026-03-30', status: 'present' }
    ]
  };

  return (
    <div className="pb-8">
      {isAdmin && (
        <button 
          onClick={() => navigate(-1)} 
          className="mb-4 flex items-center text-blue-600 font-medium"
        >
          <ArrowLeft size={20} className="mr-1" />
          Back
        </button>
      )}

      {/* Profile Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center mb-6">
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
          <User size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
        <p className="text-gray-500 font-medium">{student.batch}</p>
        <div className="flex gap-4 mt-4 w-full">
           <div className="flex-1 bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
             <div className="text-sm text-gray-500 mb-1 leading-tight">Age</div>
             <div className="font-semibold text-gray-800 whitespace-nowrap">{student.age} yrs</div>
           </div>
           <div className="flex-1 bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
             <div className="text-sm text-gray-500 mb-1 leading-tight">Attendance</div>
             <div className="font-semibold text-gray-800 whitespace-nowrap">{student.attendancePercentage}%</div>
           </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6 space-y-4">
        <h3 className="font-semibold text-gray-800 border-b pb-2 mb-2">Contact Details</h3>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
            <User size={20} />
          </div>
          <div>
            <div className="text-xs text-gray-400">Parent Name</div>
            <div className="text-sm font-medium text-gray-700">{student.parentName}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
            <Phone size={20} />
          </div>
          <div>
            <div className="text-xs text-gray-400">Phone Number</div>
            <div className="text-sm font-medium text-gray-700">{student.phone}</div>
          </div>
          {isAdmin && (
            <a href={`tel:${student.phone}`} className="ml-auto text-blue-600 text-sm font-medium">Call</a>
          )}
        </div>
      </div>

      {/* Fees & Schedule */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="text-gray-400" size={20}/>
            <h3 className="font-semibold text-gray-800">Fees Details</h3>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Total Fees</span>
            <span className="font-medium">{student.feesTotal}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Paid Amount</span>
            <span className="font-medium text-green-600">{student.feesPaid}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t mt-2">
            <span className="text-gray-800 font-semibold">Remaining Amount</span>
            <span className="font-bold text-red-500">{student.feesRemaining}</span>
          </div>
          {isAdmin && (
            <button className="w-full mt-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-xl hover:bg-blue-100 transition-colors">
              Record Payment
            </button>
          )}
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="text-gray-400" size={20}/>
            <h3 className="font-semibold text-gray-800">Practice Schedule</h3>
          </div>
          <p className="text-gray-700 font-medium bg-gray-50 p-3 rounded-xl">{student.schedule}</p>
        </div>
      </div>

      <StudentAttendanceHistory history={student.history} />

    </div>
  );
};

export default StudentDetail;
