'use client';
import React from 'react';
import StartButton from './StartButton';

export default function Taskbar({ onStartClick, openWindows, setActiveWindow, bringToFront }) {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateClock();
    const intervalId = setInterval(updateClock, 1000 * 60); // Update every minute
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-[30px] bg-win95-silver win95-raised flex items-center px-1 z-50 select-none"
      aria-label="Taskbar"
    >
      <StartButton onClick={onStartClick} />
      <div className="h-full border-l border-win95-border-dark mx-1"></div>
      <div className="h-full border-l border-win95-border-light mx-px"></div>
      
      <div className="flex-grow flex items-center space-x-1 overflow-x-auto h-full py-0.5">
        {openWindows.map(win => (
          !win.isPopup && // Don't show popups like Start Menu in taskbar
          <button
            key={win.id}
            onClick={() => {
              setActiveWindow(win.id);
              bringToFront(win.id);
            }}
            className={`
              h-full min-w-[100px] max-w-[150px] win95-raised px-2 py-0.5 text-sm truncate
              ${win.isActive ? 'win95-sunken font-bold' : ''}
              ${win.isMinimized ? 'opacity-75' : ''}
            `}
          >
            {win.title}
          </button>
        ))}
      </div>

      <div className="h-full border-l border-win95-border-dark mx-1"></div>
      <div className="h-full border-l border-win95-border-light mx-px"></div>
      
      <div className="win95-sunken px-2 py-0.5 text-sm h-[22px] flex items-center">
        {time}
      </div>
    </div>
  );
}
