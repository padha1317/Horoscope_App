'use server';

import { get } from "lodash";
import { horoscopes } from "../constant/horoscope";

export const getHoroscope = async (sign: string, lang: string) => {
  if (!sign || !horoscopes[sign as keyof typeof horoscopes]) {
    return { error: 'Invalid sign' };
  }

  const horoscopeData = horoscopes[sign as keyof typeof horoscopes];
  const horoscopeMessages = get(horoscopeData, lang, []);

  if (!Array.isArray(horoscopeMessages) || horoscopeMessages.length === 0) {
    return { error: 'No horoscope available for this sign.' };
  }

  // Select a random message
  const randomHoroscope = horoscopeMessages[Math.floor(Math.random() * horoscopeMessages.length)];

  return {
    horoscope: randomHoroscope,
    image: horoscopeData.image
  };

  // // Get the current date
  // const today = new Date();
  // const dayOfMonth = today.getDate(); // Get the day of the month (1-31)

  // // Select a horoscope message based on the day of the month
  // const index = (dayOfMonth - 1) % horoscopeMessages.length; // Ensure it loops within available messages
  // const selectedHoroscope = horoscopeMessages[index];

  // return {
  //   horoscope: selectedHoroscope,
  //   image: horoscopeData.image
  // };
};
