import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const specialDates = [
    { 
      date: '2024-01-15', 
      type: 'anniversary', 
      title: 'Our First Date', 
      emoji: '💕',
      description: 'The day we first went out together and I knew you were special'
    },
    { 
      date: '2024-02-14', 
      type: 'valentine', 
      title: "Valentine's Day", 
      emoji: '💖',
      description: 'Our first Valentine\'s Day celebration together'
    },
    { 
      date: '2024-03-22', 
      type: 'special', 
      title: 'Your Birthday', 
      emoji: '🎁',
      description: 'The most special day of the year - celebrating wonderful you!'
    },
    { 
      date: '2024-06-10', 
      type: 'memory', 
      title: 'Our First Kiss', 
      emoji: '⭐',
      description: 'The magical moment when time stood still'
    },
    { 
      date: '2024-08-05', 
      type: 'special', 
      title: 'Beach Trip', 
      emoji: '🏖️',
      description: 'Our adventure by the ocean with unforgettable sunsets'
    },
    { 
      date: '2024-12-25', 
      type: 'holiday', 
      title: 'Christmas Together', 
      emoji: '🎄',
      description: 'Cozy holiday moments filled with love and joy'
    },
  ];

  const getEventGradient = (type) => {
    switch (type) {
      case 'anniversary': return 'bg-gradient-to-r from-pink-400 to-rose-400';
      case 'valentine': return 'bg-gradient-to-r from-red-400 to-pink-400';
      case 'special': return 'bg-gradient-to-r from-purple-400 to-pink-400';
      case 'memory': return 'bg-gradient-to-r from-indigo-400 to-purple-400';
      case 'holiday': return 'bg-gradient-to-r from-green-400 to-emerald-400';
      default: return 'bg-gradient-to-r from-blue-400 to-cyan-400';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="h-full bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 overflow-auto p-5">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <span className="text-4xl">💝</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
            Our Special Dates
          </h1>
          <p className="text-purple-600 text-lg font-medium">Moments I cherish with you 💕</p>
        </div>

        {/* Special dates cards */}
        <div className="space-y-5">
          {specialDates.map((event) => (
            <div 
              key={event.date}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-2 border-pink-100"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Date bubble with emoji */}
                <div className={`${getEventGradient(event.type)} p-6 flex flex-col items-center justify-center sm:w-1/3 text-white`}>
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center mb-2">
                    <span className="text-3xl">{event.emoji}</span>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">{formatDate(event.date).split(',')[0]}</div>
                    <div className="text-sm opacity-90">{formatDate(event.date).split(',').slice(1).join('')}</div>
                  </div>
                </div>
                
                {/* Event details */}
                <div className="p-5 flex-1">
                  <h3 className="text-xl font-bold text-pink-800 mb-2">{event.title}</h3>
                  <p className="text-purple-700">{event.description}</p>
                  
                  {/* Decorative elements */}
                  <div className="mt-3 flex space-x-2">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-sm">❤️</span>
                    </div>
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm">✨</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Cute footer */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-md rounded-full shadow-md border-2 border-pink-100">
            <span className="text-lg mr-2">🎀</span>
            <span className="text-pink-800 font-medium">Can't wait to make more memories with you</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;