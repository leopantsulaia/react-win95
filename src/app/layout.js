// This file is a Server Component by default in App Router.
import './globals.css'; // Imports global styles, including VT323 font via @import.

export const metadata = {
  title: 'RetroReact OS',
  description: 'A Windows 95 style UI in React',
  viewport: 'width=device-width, initial-scale=1', // Added viewport to metadata
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 
        The <head> tag is automatically managed by Next.js based on the exported 'metadata' object
        and other conventions. No need to manually include <head>, <meta charSet>, <title>, etc. here.
        Next.js handles UTF-8 encoding by default.
      */}
      <body className="antialiased"> {/* 'antialiased' for font smoothing, VT323 font is applied via globals.css */}
        {children}
      </body>
    </html>
  );
}
