'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Window from './win95/Window';
import Taskbar from './win95/Taskbar';
import StartMenu from './win95/StartMenu';
import SettingsPanel from './win95/SettingsPanel';

let windowIdCounter = 0;

export default function DesktopEnvironment() {
  const [windows, setWindows] = useState([
    { 
      id: ++windowIdCounter, 
      title: 'My Computer', 
      content: <div className="p-2">Well it's "MY COMPUTER". To really display the computer icon and everything here, like why should I do it for free? and then you go there and see the files? it's simple right? the huge part is just a design. <br/><br/> <img src="https://picsum.photos/200/100" data-ai-hint="retro computer" alt="placeholder"/></div>,
      isOpen: true, 
      isMinimized: false,
      isMaximized: false,
      isActive: true,
      zIndex: 2,
      position: { x: 50, y: 50 },
      size: { width: 350, height: 250 }
    },
    { 
      id: ++windowIdCounter, 
      title: 'Notepad', 
      content: <textarea className="w-full h-full border-none outline-none resize-none p-1 font-mono text-xs" defaultValue="Hello, Leo's World! Type something here..."></textarea>,
      isOpen: true, 
      isMinimized: false,
      isMaximized: false,
      isActive: false,
      zIndex: 1,
      position: { x: 250, y: 150 },
      size: { width: 400, height: 300 }
    },
     { 
      id: ++windowIdCounter, 
      title: 'Phylosophy.txt', 
      content: <textarea className="w-full h-full border-none outline-none resize-none p-1 font-mono text-xs" defaultValue="Go to hell, this is God's engineering, and he never even finished university!!! ..."></textarea>,
      isOpen: true, 
      isMinimized: false,
      isMaximized: false,
      isActive: false,
      zIndex: 0,
      position: { x: 450, y: 300 },
      size: { width: 300, height: 200 }
    }
  ]);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [nextZIndex, setNextZIndex] = useState(windows.length + 3); // Start z-index high enough

  const bringToFront = useCallback((id) => {
    setWindows(prevWindows => 
      prevWindows.map(win => ({
        ...win,
        isActive: win.id === id,
        zIndex: win.id === id ? nextZIndex : win.zIndex
      }))
    );
    setNextZIndex(prev => prev + 1);
  }, [nextZIndex]);

  const openWindow = (title, content, size = { width: 450, height: 350 }, position) => {
    const newId = ++windowIdCounter;
    const newWindow = {
      id: newId,
      title,
      content,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      isActive: true,
      zIndex: nextZIndex + 1,
      position: position || { x: Math.random() * 200 + 50, y: Math.random() * 100 + 50 },
      size: size,
    };
    setWindows(prev => [...prev.map(w => ({...w, isActive: false})), newWindow]);
    setNextZIndex(prev => prev + 1);
    return newId;
  };

  const closeWindow = (id) => {
    setWindows(prev => prev.map(win => win.id === id ? { ...win, isOpen: false } : win));
  };

  const minimizeWindow = (id) => {
    setWindows(prev => prev.map(win => win.id === id ? { ...win, isMinimized: true, isActive: false } : win));
    // Focus next available window or desktop
    const otherWindows = windows.filter(w => w.isOpen && !w.isMinimized && w.id !== id);
    if (otherWindows.length > 0) {
        bringToFront(otherWindows.sort((a,b) => b.zIndex - a.zIndex)[0].id);
    }
  };

  const maximizeWindow = (id) => {
    setWindows(prev => prev.map(win => win.id === id ? { ...win, isMaximized: !win.isMaximized, isMinimized: false } : win));
    if (!windows.find(w => w.id === id)?.isMinimized) { // if it was not minimized before this action
        bringToFront(id);
    }
  };
  
  const setActiveWindow = (id) => {
     if (windows.find(w => w.id === id && w.isMinimized)) { // If minimized, restore and focus
        setWindows(prev => prev.map(win => win.id === id ? { ...win, isMinimized: false, isActive: true, zIndex: nextZIndex } : {...win, isActive: win.id === id}));
        setNextZIndex(prev => prev + 1);
     } else {
        bringToFront(id);
     }
  };

  const handleOpenSettings = () => {
    const settingsId = windows.find(w => w.title === 'Settings')?.id;
    if (settingsId && windows.find(w => w.id === settingsId)?.isOpen) {
      setActiveWindow(settingsId);
    } else {
      openWindow('Settings', <SettingsPanel onClose={(idToClose) => closeWindow(idToClose || newId)} />, {width: 500, height: 400});
    }
    setIsStartMenuOpen(false);
  };

  const toggleStartMenu = () => setIsStartMenuOpen(prev => !prev);
  const closeStartMenu = () => setIsStartMenuOpen(false);

  useEffect(() => {
    const handleClickOutsideStartMenu = (event) => {
      if (isStartMenuOpen && !event.target.closest('.start-menu-container') && !event.target.closest('button[aria-label="Start Button"]')) {
         // This logic needs refinement if StartButton is not a direct child or specific class
         // For simplicity, now just rely on clicking menu items or taskbar button to close.
      }
    };
    document.addEventListener('mousedown', handleClickOutsideStartMenu);
    return () => document.removeEventListener('mousedown', handleClickOutsideStartMenu);
  }, [isStartMenuOpen]);


  return (
    <div className="fixed inset-0 bg-win95-teal-desktop overflow-hidden select-none" onClick={closeStartMenu}>
      {windows.map(win => (
        win.isOpen && !win.isPopup && // Don't render popups like start menu as standard windows
        <Window
          key={win.id}
          id={win.id}
          title={win.title}
          initialPosition={win.position}
          initialSize={win.size}
          isOpen={win.isOpen}
          isMinimized={win.isMinimized}
          isMaximized={win.isMaximized}
          zIndex={win.zIndex}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onMaximize={maximizeWindow}
          onFocus={bringToFront}
        >
          {React.cloneElement(win.content, { onClose: () => closeWindow(win.id) })}
        </Window>
      ))}
      
      <div className="start-menu-container"> {/* Wrapper for click outside logic */}
        {isStartMenuOpen && <StartMenu onOpenSettings={handleOpenSettings} onClose={closeStartMenu} />}
      </div>
      
      <Taskbar 
        onStartClick={(e) => { e.stopPropagation(); toggleStartMenu(); }}
        openWindows={windows.filter(w => w.isOpen)}
        setActiveWindow={setActiveWindow}
        bringToFront={bringToFront}
      />
    </div>
  );
}
