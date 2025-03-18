'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from './layout'; // Import the language context
import './globals.css';

const zodiacSigns = [
  { name: { en: "Aries", de: "Widder" }, symbol: "♈", key: "aries" },
  { name: { en: "Taurus", de: "Stier" }, symbol: "♉", key: "taurus" },
  { name: { en: "Gemini", de: "Zwillinge" }, symbol: "♊", key: "gemini" },
  { name: { en: "Cancer", de: "Krebs" }, symbol: "♋", key: "cancer" },
  { name: { en: "Leo", de: "Löwe" }, symbol: "♌", key: "leo" },
  { name: { en: "Virgo", de: "Jungfrau" }, symbol: "♍", key: "virgo" },
  { name: { en: "Libra", de: "Waage" }, symbol: "♎", key: "libra" },
  { name: { en: "Scorpio", de: "Skorpion" }, symbol: "♏", key: "scorpio" },
  { name: { en: "Sagittarius", de: "Schütze" }, symbol: "♐", key: "sagittarius" },
  { name: { en: "Capricorn", de: "Steinbock" }, symbol: "♑", key: "capricorn" },
  { name: { en: "Aquarius", de: "Wassermann" }, symbol: "♒", key: "aquarius" },
  { name: { en: "Pisces", de: "Fische" }, symbol: "♓", key: "pisces" }
];

export default function Home() {
  const router = useRouter();
  const { language } = useLanguage(); // Get selected language
  const [selectedDate, setSelectedDate] = useState('');
  const [dateWarningVisible, setDateWarningVisible] = useState(false);

  const handleSelect = (sign: string) => {
    if (!selectedDate) {
      setDateWarningVisible(true);
      return;
    }
    router.push(`/horoscope/${language}/${sign}?date=${selectedDate}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-6 bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-lg">
      <p className="text-lg text-gray-600 text-center mb-4">
        {language === 'en' ? 'Select your zodiac sign and date to get your horoscope.' : 'Wählen Sie Ihr Sternzeichen und Datum, um Ihr Horoskop zu erhalten.'}
      </p>

      {/* Date selection input */}
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="p-3 border rounded-lg shadow-md text-gray-700 mb-6 w-full max-w-xs"
      />

      {/* Message shown if no date is selected and user tries to select a zodiac */}
      {dateWarningVisible && !selectedDate && (
        <p className="text-lg text-red-500 text-center">
          {language === 'en' ? 'Please select a date first.' : 'Bitte wählen Sie zuerst ein Datum.'}
        </p>
      )}

      {/* Zodiac Sign Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {zodiacSigns.map((sign) => (
          <button
            key={sign.key}
            onClick={() => handleSelect(sign.key)}
            className="relative group w-28 h-28 rounded-lg shadow-md bg-green-500 hover:bg-blue-500 text-white font-bold text-lg flex items-center justify-center transition-all duration-300"
          >
            <span className="group-hover:hidden">{language === 'en' ? sign.name.en : sign.name.de}</span>
            <span className="hidden group-hover:block text-3xl">{sign.symbol}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
