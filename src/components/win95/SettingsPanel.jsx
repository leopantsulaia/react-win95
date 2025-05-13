'use client';
import React from 'react';
import WinButton from './WinButton';

export default function SettingsPanel({onClose}) {
  return (
    <div className="p-4 h-full flex flex-col">
      <h2 className="text-lg font-bold mb-4">Control Panel</h2>
      <p className="mb-2">Customize your RetroReact OS experience.</p>
      
      <div className="border p-2 mb-4 win95-sunken bg-white">
        <p className="text-sm mb-1">Appearance Settings:</p>
        <WinButton className="text-sm mr-2" disabled>Change Desktop Background</WinButton>
        <WinButton className="text-sm" disabled>Screen Saver</WinButton>
      </div>

      <div className="border p-2 mb-4 win95-sunken bg-white">
        <p className="text-sm mb-1">System Settings:</p>
        <WinButton className="text-sm mr-2" disabled>Date/Time</WinButton>
        <WinButton className="text-sm" disabled>Mouse</WinButton>
      </div>
      
      <p className="text-xs text-win95-border-dark mt-auto">
        More settings coming soon...
      </p>
       <div className="mt-auto flex justify-end space-x-2 pt-4">
        <WinButton onClick={onClose} className="w-20">OK</WinButton>
        <WinButton onClick={onClose} className="w-20">Cancel</WinButton>
        <WinButton onClick={() => alert("Apply settings not implemented.")} className="w-20" disabled>Apply</WinButton>
      </div>
    </div>
  );
}
