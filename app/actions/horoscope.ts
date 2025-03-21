'use server';

import { get } from "lodash";

import { horoscopes } from "../constant/horoscope";

export const getHoroscope = async (sign: string, lang: string) => {
  const horoscopeData = horoscopes[sign as keyof typeof horoscopes];
  const horoscopeMessages = get(horoscopeData, lang, []);

  // Select a random message
  const randomHoroscope = horoscopeMessages[Math.floor(Math.random() * horoscopeMessages.length)];

  return {
    horoscope: randomHoroscope,
    image: horoscopeData.image
  };
  
}
