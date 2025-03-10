'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import './globals.css';

const zodiacSigns = [
  { name: "Aries", symbol: "♈", key: "aries" },
  { name: "Taurus", symbol: "♉", key: "taurus" },
  { name: "Gemini", symbol: "♊", key: "gemini" },
  { name: "Cancer", symbol: "♋", key: "cancer" },
  { name: "Leo", symbol: "♌", key: "leo" },
  { name: "Virgo", symbol: "♍", key: "virgo" },
  { name: "Libra", symbol: "♎", key: "libra" },
  { name: "Scorpio", symbol: "♏", key: "scorpio" },
  { name: "Sagittarius", symbol: "♐", key: "sagittarius" },
  { name: "Capricorn", symbol: "♑", key: "capricorn" },
  { name: "Aquarius", symbol: "♒", key: "aquarius" },
  { name: "Pisces", symbol: "♓", key: "pisces" }
];

export default function Home() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  }, []);

  const handleSelect = (sign: string) => {
    if (!selectedDate) {
      alert('Please select a date first.');
      return;
    }
    const language = navigator.language.startsWith('de') ? 'de' : 'en';
    router.push(`/horoscope/${language}/${sign}?date=${selectedDate}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-6 bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-lg">
      {/* <h1 className="text-4xl font-bold text-center text-gray-700 mb-6">Horoscope App</h1> */}
      <p className="text-lg text-gray-600 text-center mb-4">Select your zodiac sign and date to get your horoscope.</p>
      
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        min={new Date().toISOString().split('T')[0]}
        className="p-3 border rounded-lg shadow-md text-gray-700 mb-6 w-full max-w-xs"
      />

      {/* Zodiac Sign Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {zodiacSigns.map((sign) => (
          <button
            key={sign.key}
            onClick={() => handleSelect(sign.key)}
            className="relative group w-28 h-28 rounded-lg shadow-md bg-green-500 text-white font-bold text-lg flex items-center justify-center transition-all duration-300"
          >
            {/* Default: Show Name | On Hover: Show Symbol */}
            <span className="group-hover:hidden">{sign.name}</span>
            <span className="hidden group-hover:block text-3xl">{sign.symbol}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
