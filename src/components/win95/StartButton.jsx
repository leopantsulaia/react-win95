'use client';
import React from 'react';
import WinButton from './WinButton';
import { WindowsLogoIcon } from './PixelIcons';

export default function StartButton({ onClick }) {
  return (
    <WinButton onClick={onClick} className="font-bold flex items-center space-x-1 !py-0.5 h-[22px]">
      <WindowsLogoIcon />
      <span>Start</span>
    </WinButton>
  );
}
