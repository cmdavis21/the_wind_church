export type SanityTextBlock = {
  _type: string;
  children?: { text?: string }[];
};

export function portableTextToString(blocks: SanityTextBlock[] | SanityTextBlock): string {
  if (!blocks) return '';
  if (!Array.isArray(blocks)) blocks = [blocks];
  return blocks
    .map((block) =>
      block._type === 'block' && block.children
        ? block.children.map((child) => ('text' in child ? (child.text ?? '') : '')).join('')
        : ''
    )
    .join('\n');
}

export const getLocalizedValue = <T extends Record<string, any>>(
  value: T | undefined,
  locale: string,
  defaultLocale = 'en'
) => {
  if (!value) return '';
  return value[locale] ?? value[defaultLocale] ?? '';
};

export const getLocalizedPortableText = (
  value: Record<string, any> | undefined,
  locale: string
) => {
  if (!value) return [];
  return value[`${locale}Raw`] ?? value.enRaw ?? [];
};
