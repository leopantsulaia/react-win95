'use client';
import React from 'react';
import { SettingsIcon, FolderIcon, RightArrowIcon, WindowsLogoIcon } from './PixelIcons'; // Assuming a generic power/shutdown icon

const MenuItem = ({ icon, text, onClick, hasSubmenu, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      w-full flex items-center space-x-2 px-3 py-1.5 text-left text-sm
      hover:bg-win95-navy-title hover:text-white
      focus:bg-win95-navy-title focus:text-white focus:outline-none
      ${disabled ? 'text-win95-border-dark cursor-default hover:bg-transparent hover:text-black' : 'text-black'}
    `}
  >
    {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
    <span className="flex-grow">{text}</span>
    {hasSubmenu && <RightArrowIcon />}
  </button>
);

export default function StartMenu({ onOpenSettings, onShutdown, onClose }) {
  // TODO: Implement submenus and more items
  return (
    <div 
      className="fixed bottom-[30px] left-0 w-[200px] bg-win95-silver win95-raised flex flex-col z-[100] shadow-lg"
      aria-label="Start Menu"
      role="menu"
    >
      <div className="flex flex-row">
        <div className="bg-win95-border-dark w-6 flex items-end justify-center py-2">
          <span className="transform -rotate-90 whitespace-nowrap text-win95-silver font-bold text-lg tracking-wider" style={{ writingMode: 'vertical-lr' }}>
            RetroReact OS
          </span>
        </div>
        <div className="flex-grow py-1">
          <MenuItem icon={<FolderIcon />} text="Programs" hasSubmenu disabled />
          <MenuItem icon={<FolderIcon />} text="Documents" hasSubmenu disabled/>
          <MenuItem icon={<SettingsIcon />} text="Settings" onClick={() => { onOpenSettings(); onClose(); }} />
          <MenuItem icon={<FolderIcon />} text="Find" hasSubmenu disabled/>
          <MenuItem icon={<FolderIcon />} text="Help" disabled/>
          <MenuItem icon={<FolderIcon />} text="Run..." disabled/>
          <div className="border-t border-win95-border-dark my-1 mx-1"></div>
          <MenuItem 
            icon={<WindowsLogoIcon/>} 
            text="Shut Down..." 
            onClick={() => { 
                alert("Shut down functionality is not implemented in this demo."); 
                onClose(); 
            }} 
          />
        </div>
      </div>
    </div>
  );
}
