'use server';

import { cookies } from 'next/headers';

const COOKIE_NAME = 'WSWC_PREFERRED_LOCALE';

export async function setUserLocale(locale: string) {
  cookies().set({
    name: COOKIE_NAME,
    value: locale,
    path: '/',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });
}
