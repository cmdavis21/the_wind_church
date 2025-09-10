import { getRequestConfig } from 'next-intl/server';
import nookies from 'nookies';

export default getRequestConfig(async () => {
  const locale = nookies.get().WSWC_PREFERRED_LOCALE || 'en';
  return {
    locale,
    messages: (await import(`./translations/${locale}.json`)).default,
  };
});
