"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>
          Artkins
        </title>
      </head>
      <body
        className={`bg-gradient-to-t from-primary to-secondary font-sans text-light_txt transition-all duration-1000 ease-in-out ${darkMode ? '' : 'DARK'
          }`}
      >
        <div className="grid grid-cols-12 gap-5 md:gap-12 lg:gap-4 my-5 md:my-[85px] lg:my-7 px-5 md:px-20 lg:px-4">
          <div className="col-span-12 lg:col-span-3 bg-light_bg_bright rounded-2xl text-center overflow-hidden">
            <Sidebar />
          </div>
          <div className="col-span-12 lg:col-span-9 bg-light_bg_bright rounded-2xl overflow-hidden">
            <Navbar toggleDarkMode={toggleDarkMode} />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
