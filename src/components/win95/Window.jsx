'use client';
import React, { useState, useEffect, useRef } from 'react';
import WinButton from './WinButton';
import { MinimizeIcon, MaximizeIcon, RestoreIcon, CloseIcon } from './PixelIcons';

export default function Window({ 
  id,
  title, 
  children, 
  initialPosition = { x: 50, y: 50 }, 
  initialSize = { width: 400, height: 300 },
  isOpen,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  zIndex,
  isMinimized,
  isMaximized
}) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleMouseMove = (e) => {
      if (!isDragging || isMaximized) return;
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, isMaximized]);

  const handleMouseDownTitleBar = (e) => {
    if (e.target.closest('button')) return; // Don't drag if clicking a button
    if (isMaximized) return;
    onFocus(id);
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };
  
  const handleWindowFocus = () => {
    onFocus(id);
  };

  if (!isOpen || isMinimized) {
    return null;
  }

  const windowStyles = isMaximized ? {
    top: 0, left: 0, width: '100vw', height: 'calc(100vh - 30px)', // 30px for taskbar
    transform: 'none',
  } : {
    top: position.y,
    left: position.x,
    width: size.width,
    height: size.height,
  };

  return (
    <div
      ref={windowRef}
      className="win95-raised absolute bg-win95-silver flex flex-col"
      style={{ ...windowStyles, zIndex, boxShadow: '2px 2px 0px black' }}
      onMouseDown={handleWindowFocus} // Bring to front on any click within window
      aria-label={`${title} window`}
      role="dialog"
    >
      <div
        className={`win95-active-title-bar flex items-center justify-between p-1 cursor-default select-none ${isMaximized ? '' : 'cursor-grab'}`}
        onMouseDown={handleMouseDownTitleBar}
        onDoubleClick={() => onMaximize(id)}
      >
        <span className="font-bold text-sm truncate ml-1">{title}</span>
        <div className="flex space-x-1">
          <WinButton onClick={() => onMinimize(id)} className="p-0 w-4 h-4 flex items-center justify-center !text-black" aria-label="Minimize">
            <MinimizeIcon />
          </WinButton>
          <WinButton onClick={() => onMaximize(id)} className="p-0 w-4 h-4 flex items-center justify-center !text-black" aria-label={isMaximized ? "Restore" : "Maximize"}>
            {isMaximized ? <RestoreIcon /> : <MaximizeIcon />}
          </WinButton>
          <WinButton onClick={() => onClose(id)} className="p-0 w-4 h-4 flex items-center justify-center !text-black bg-win95-silver" aria-label="Close">
            <CloseIcon />
          </WinButton>
        </div>
      </div>
      <div className="win95-sunken m-1 p-1 flex-grow overflow-auto bg-white text-black">
        {children}
      </div>
    </div>
  );
}
