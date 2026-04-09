import { useState } from 'react';
import CalendarDayModal from './CalendarDayModal';

const mockHistoricalData = {
  '2026-04-05': { majority: 'absent' },
  '2026-04-06': { majority: 'present' },
  '2026-04-07': { majority: 'present' },
  '2026-04-08': { majority: 'present' },
  // current day 9th handled in realistic render
};

const AttendanceCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Generating a simple calendar view for April 2026 as per dummy date
  const daysInMonth = 30; // April has 30 days
  const startDay = 3; // April 1, 2026 is a Wednesday (0=Sun, 1=Mon, 2=Tue, 3=Wed)
  
  const todayDate = 9; // Based on metadata current date April 9

  const handleDayClick = (dayStr, summary) => {
    setSelectedDate({ date: dayStr, summary });
  };

  const renderCells = () => {
    let cells = [];
    // empty blocks for start mapping
    for (let i = 0; i < startDay; i++) {
        cells.push(<div key={`empty-${i}`} className="p-2 opacity-0"></div>);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dateKey = `2026-04-${day.toString().padStart(2, '0')}`;
        const info = mockHistoricalData[dateKey];
        const isToday = day === todayDate;
        const isFuture = day > todayDate;
        
        let bgColor = 'bg-gray-50 border-gray-100 hover:bg-gray-100'; // Default no data
        let textColor = 'text-gray-700';

        if (info) {
          if (info.majority === 'present') {
            bgColor = 'bg-green-50 border-green-200 hover:bg-green-100 text-green-700';
          } else if (info.majority === 'absent') {
            bgColor = 'bg-red-50 border-red-200 hover:bg-red-100 text-red-700';
          }
        }
        
        if (isToday) {
            bgColor = 'bg-blue-600 text-white shadow-md border-blue-600';
            textColor = 'text-white';
        }
        
        if (isFuture) {
            bgColor = 'bg-gray-50/50 border-gray-50/50 opacity-50';
        }

        cells.push(
          <div 
             key={day} 
             onClick={() => !isFuture && handleDayClick(dateKey, info)}
             className={`aspect-square rounded-lg flex flex-col items-center justify-center font-medium border cursor-pointer transition-colors ${bgColor} ${textColor} relative`}
          >
             {day}
          </div>
        );
    }
    
    return cells;
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mt-4 mb-24">
      <div className="flex justify-between items-center mb-4">
         <h2 className="text-lg font-bold text-gray-800">April 2026</h2>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">
        <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {renderCells()}
      </div>

      <CalendarDayModal 
        isOpen={!!selectedDate} 
        onClose={() => setSelectedDate(null)} 
        date={selectedDate?.date}
        summary={selectedDate?.summary}
      />
    </div>
  );
};

export default AttendanceCalendar;
