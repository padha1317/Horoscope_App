'use server';

import { get } from "lodash";
import { horoscopes } from "../constant/horoscope";

export const getHoroscope = async (sign: string, lang: string) => {
  if (!sign || !horoscopes[sign as keyof typeof horoscopes]) {
    return { error: 'Invalid sign' };
  }

  const horoscope = horoscopes[sign as keyof typeof horoscopes];
  return {
    horoscope: get(horoscope, lang),
    image: horoscope.image
  };
};