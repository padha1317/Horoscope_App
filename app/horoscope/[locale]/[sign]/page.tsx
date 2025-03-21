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

  // Using the server action
  const data = await getHoroscope(sign, locale);

// If image or horoscope is missing, pass the relevant error to the Horoscope component
return (
  <Horoscope
    horoscope={data.horoscope ?? ''}
    image={data.image ?? ''}
    lang={locale}
  />
);
}