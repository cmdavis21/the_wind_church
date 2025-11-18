import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const locale = cookies().get('WSWC_PREFERRED_LOCALE')?.value || 'en';
  return {
    locale,
    messages: (await import(`./translations/${locale}.json`)).default,
  };
});
