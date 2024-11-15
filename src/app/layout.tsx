// layout.tsx
import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from '@/Components/Shared/ThemeContext';

export const metadata: Metadata = {
  title: "Ochwada's Profile",
  description: "Linda Ochwada's profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="antialiased font-grotesk">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}