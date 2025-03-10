import { get } from 'lodash';
import Horoscope from '../../../components/Horoscope';
import { getHoroscope } from '@/app/actions/horoscope';
import '../../../globals.css'; // Import global styles here

export default async function HoroscopePage({
  params
}: {
  params: { sign: string, locale: 'en' | 'de' };
}) {
  const sign = get(params, 'sign', 'aries');
  const locale = get(params, 'locale', 'en');

  // Using fetch to call the API
  // const res = await fetch(
  //   `http://localhost:3000/api/horoscope?sign=${sign}&lang=${locale}`
  // );
  // const data = await res.json();

  // Using the server action
  const data = await getHoroscope(sign, locale);

  return <Horoscope horoscope={data.horoscope ?? ''} image={data.image ?? ''} lang={locale} />;
  
  
}