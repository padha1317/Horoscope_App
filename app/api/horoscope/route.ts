import { horoscopes } from '@/app/constant/horoscope';
import { get } from 'lodash';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {

  const url = new URL(req.url);
  const sign = url.searchParams.get('sign');
  const lang = url.searchParams.get('lang') || 'en'; // Default to 'en' if no lang is specified

  if (!sign || !horoscopes[sign as keyof typeof horoscopes]) {
    return NextResponse.json({ error: 'Invalid sign' }, { status: 400 });
  }

  const horoscope = horoscopes[sign as keyof typeof horoscopes];
  return NextResponse.json({
    horoscope: get(horoscope, lang),
    image: horoscope.image
  });
}
