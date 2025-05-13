'use client';
import React from 'react';

const commonProps = {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  style: { imageRendering: 'pixelated' }
};

export const MinimizeIcon = () => (
  <svg {...commonProps}>
    <path d="M2 8H10V9H2V8Z" />
  </svg>
);

export const MaximizeIcon = () => (
  <svg {...commonProps}>
    <path d="M2 2H10V3H2V2ZM2 3H3V10H2V3ZM9 3H10V10H9V3ZM2 9H10V10H2V9Z" />
  </svg>
);

export const RestoreIcon = () => ( // For when maximized
    <svg {...commonProps} viewBox="0 0 14 14">
        {/* Bottom window */}
        <path d="M3 5H9V6H3V5ZM3 6H4V11H3V6ZM8 6H9V11H8V6ZM3 10H9V11H3V10Z" />
        {/* Top window */}
        <path d="M5 3H11V4H5V3ZM5 4H6V7H5V4ZM10 4H11V7H10V4ZM7 2H11V3H7V2Z" />
    </svg>
);


export const CloseIcon = () => (
  <svg {...commonProps}>
    <path d="M2 2L3 2L6 5L9 2L10 2L10 3L7 6L10 9L10 10L9 10L6 7L3 10L2 10L2 9L5 6L2 3L2 2Z" />
  </svg>
);

export const WindowsLogoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <path d="M4 4H11V11H4V4Z" fill="#FF3B30"/> {/* Red */}
    <path d="M13 4H20V11H13V4Z" fill="#4CD964"/> {/* Green */}
    <path d="M4 13H11V20H4V13Z" fill="#007AFF"/> {/* Blue */}
    <path d="M13 13H20V20H13V13Z" fill="#FFCC00"/> {/* Yellow */}
  </svg>
);

export const SettingsIcon = () => (
  <svg {...commonProps} viewBox="0 0 16 16">
    <path d="M6 2H10V3H12V5H13V7H14V9H13V11H12V13H10V14H6V13H4V11H3V9H2V7H3V5H4V3H6V2ZM7 7H9V9H7V7Z" fill="#808080" />
    <path d="M7 4H9V6H7V4ZM4 6H6V7H4V6ZM10 6H12V7H10V6ZM4 9H6V10H4V9ZM10 9H12V10H10V9ZM7 10H9V12H7V10Z" fill="#C0C0C0" />
  </svg>
);

export const FolderIcon = () => (
    <svg {...commonProps} viewBox="0 0 16 16">
        <path d="M1 3H6L7 5H15V13H1V3Z" fill="#FFCC00" /> 
        <rect x="2" y="6" width="12" height="6" fill="#FFE066" />
    </svg>
);

export const RightArrowIcon = () => (
    <svg {...commonProps} viewBox="0 0 8 8" width="8" height="8">
        <path d="M2 1L2 7L6 4L2 1Z" fill="black" />
    </svg>
);
