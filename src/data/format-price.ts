import { CurrencyCode } from './services/shopify/zeus';

export interface Price {
  amount: number | string;
  currencyCode: CurrencyCode;
  locales?: string | string[];
}

export const formatPrice = ({ amount, currencyCode, locales }: Price): string => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(Number(amount));
};
