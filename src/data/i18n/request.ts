import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { DEFAULT_LOCALE } from './utils';

export default getRequestConfig(async () => {
  const locale = cookies().get('WSWC_PREFERRED_LOCALE')?.value || DEFAULT_LOCALE;
  return {
    locale,
    messages: (await import(`./translations/${locale}.json`)).default,
  };
});
