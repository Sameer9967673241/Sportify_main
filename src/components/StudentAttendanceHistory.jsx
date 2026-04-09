const StudentAttendanceHistory = ({ history }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-gray-800 border-b pb-2 mb-3">Attendance History</h3>
      
      <div className="space-y-3">
        {history.slice(0, 5).map((record, idx) => (
          <div key={idx} className="flex justify-between items-center bg-gray-50 p-2.5 rounded-xl border border-gray-100">
            <span className="font-medium text-gray-700 text-sm">
              {new Date(record.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </span>
            <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg ${
              record.status === 'present' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {record.status}
            </span>
          </div>
        ))}
      </div>
      <button className="w-full text-center text-sm font-semibold text-blue-600 mt-4 py-2 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
        View All History
      </button>
    </div>
  );
};

export default StudentAttendanceHistory;
