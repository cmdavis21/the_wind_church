import React from 'react';

const styleSelectedWords = ({
  text,
  array,
  htmlTag,
  blueText,
  className,
}: {
  text: string;
  array: number[][];
  htmlTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  blueText?: boolean;
  className?: string;
}): string => {
  const splitText = text.split(' ');
  let finalText = `<${htmlTag} ${className ? `class="${className}"` : ''}>`;

  for (let i = 0; i < array.length; i++) {
    const startIndex = i === 0 ? 0 : array[i - 1][1] + 1;
    const endIndex = array[i][0];

    finalText += splitText.slice(startIndex, endIndex).join(' ');

    if (i === 0 && array[0][0] === 0) {
      finalText += `<span class="font-display ${blueText ? 'text-light-navy dark:text-dark-navy' : 'text-brand-primary'}">${splitText
        .slice(array[i][0], array[i][1] + 1)
        .join(' ')}</span>&nbsp;`;
    } else {
      finalText += `&nbsp;<span class="font-display ${blueText ? 'text-light-navy dark:text-dark-navy' : 'text-brand-primary'}">${splitText
        .slice(array[i][0], array[i][1] + 1)
        .join(' ')}</span>&nbsp;`;
    }
  }

  const startIndex = array[array.length - 1][1] + 1;
  finalText += splitText.slice(startIndex).join(' ');
  finalText += `</${htmlTag}>`;

  return finalText;
};

type TextProps = {
  children: string;
  highlight: number[][];
  htmlTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  blueText?: boolean;
  className?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  highlight,
  htmlTag = 'p',
  blueText = false,
  className,
}) => {
  const html = styleSelectedWords({
    text: children,
    array: highlight,
    htmlTag,
    blueText,
    className,
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Text;
