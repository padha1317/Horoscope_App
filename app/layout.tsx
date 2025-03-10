'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <html lang="en">
      <head />
      <body>
        {/* Header with App Logo Button */}
        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => router.push('/')}
            className="text-2xl font-bold text-gray-100 hover:text-blue-600 transition duration-300"
          >
            🔮 Horoscope App
          </button>
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}
