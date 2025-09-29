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
