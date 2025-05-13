'use client';
import './globals.css';

// Metadata (can be a const export in JS)
export const metadata = {
  title: 'RetroReact OS',
  description: 'A Windows 95 style UI in React',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Favicon link can be added here if you have one */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
