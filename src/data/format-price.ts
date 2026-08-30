import { CurrencyCode } from './server/shopify/zeus';

export interface Price {
  amount: number | string;
  currencyCode: CurrencyCode;
  locales?: string | string[];
}

export const formatPrice = ({ amount, currencyCode, locales }: Price): string => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 2,
  }).format(Number(amount));
};
