'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type HoroscopeProps = {
  horoscope: string;
  image: string;
  lang: 'en' | 'de';
};

const Horoscope = ({ horoscope, image, lang }: HoroscopeProps) => {
  const router = useRouter();
  const [capitalizedSign, setCapitalizedSign] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'de'>(lang);

  useEffect(() => {
    const pathname = window.location.pathname;
    const parts = pathname.split('/');
    const sign = parts[3]; 
    if (sign) {
      const capitalizedSign = sign.charAt(0).toUpperCase() + sign.slice(1);
      setCapitalizedSign(capitalizedSign);
    }

    const storedLang = localStorage.getItem('language') as 'en' | 'de';
    if (storedLang) setLanguage(storedLang);

    const handleStorageChange = () => {
      setLanguage(localStorage.getItem('language') as 'en' | 'de');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'de' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    window.dispatchEvent(new Event('storage'));

    window.location.href = `/horoscope/${newLang}/${window.location.pathname.split('/').pop()}`;
  };

  const goBackToSelection = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-6 bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-lg max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center text-primary-color">{capitalizedSign} Horoscope</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 text-center w-full">
        <img src={image} alt={`${capitalizedSign} Zodiac`} className="w-48 h-48 mx-auto rounded-full shadow-md mb-4"/>
        <p className="text-xl text-gray-700 mb-4">{horoscope}</p>
        
        <button
          onClick={goBackToSelection}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
        >
          {language === 'en' ? 'Back to Selection' : 'Zurück zur Auswahl'}
        </button>
      </div>
    </div>
  );
};

export default Horoscope;
