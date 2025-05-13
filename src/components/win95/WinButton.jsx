'use client';
import React from 'react';

export default function WinButton({ children, onClick, className = '', disabled = false, type = 'button', ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        win95-raised 
        bg-win95-silver 
        px-3 py-1 
        text-foreground 
        active:win95-sunken active:shadow-none active:translate-x-px active:translate-y-px
        focus:outline focus:outline-1 focus:outline-dashed focus:outline-black focus:outline-offset-[-3px]
        disabled:text-win95-border-dark disabled:shadow-none disabled:cursor-default
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
