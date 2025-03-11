'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  useEffect(() => {
    const lang = navigator.language.startsWith('de') ? 'de' : 'en';
    setLanguage(lang);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'de' : 'en';
    setLanguage(newLang);
    
    // Update the current route to the new language
    const pathParts = window.location.pathname.split('/');
    if (pathParts[1] === 'horoscope') {
      pathParts[2] = newLang; // Update language part of the URL
      router.push(pathParts.join('/'));
    }
  };

  return (
    <html lang={language}>
      <head />
      <body>
        {/* Header with App Logo Button and Language Toggle */}
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <button
            onClick={() => router.push('/')}
            className="text-2xl font-bold hover:text-blue-400 transition duration-300"
          >
            🔮 Horoscope App
          </button>
          
          <button
            onClick={toggleLanguage}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
          >
            {language === 'en' ? 'Deutsch' : 'English'}
          </button>
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}
