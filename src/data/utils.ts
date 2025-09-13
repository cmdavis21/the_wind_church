import { permanentMarker } from '@/app/(website)/layout';

export enum MediaType {
  IMAGE,
  VIDEO,
}

export const findMediaType = (url: string) => {
  if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)) {
    return MediaType.IMAGE;
  } else if (/\.(mpg|mp2|mpeg|mpe|mpv|mp4|mov|wmv)$/.test(url)) {
    return MediaType.VIDEO;
  } else {
    return null;
  }
};

export const scrollToElem = (id: string) => {
  const location = document.getElementById(id);

  if (location) {
    window.scrollTo({
      top: location.offsetTop - 100,
      left: 0,
      behavior: 'smooth',
    });
  }
};

export const styleSelectedWords = ({
  text,
  array,
  htmlTag,
  className,
}: {
  text: string;
  array: number[][];
  htmlTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
}): string => {
  const splitText = text.split(' ');
  let finalText = `<${htmlTag} ${className ? `class="${className}"` : ''}>`;

  for (let i = 0; i < array.length; i++) {
    const startIndex = i === 0 ? 0 : array[i - 1][1] + 1;
    const endIndex = array[i][0];

    finalText += splitText.slice(startIndex, endIndex).join(' ');

    if (i === 0 && array[0][0] === 0) {
      finalText += `<span class="${
        permanentMarker.className
      } text-primary dark:text-primaryDark">${splitText
        .slice(array[i][0], array[i][1] + 1)
        .join(' ')}</span>&nbsp;`;
    } else {
      finalText += `&nbsp;<span class="${
        permanentMarker.className
      } text-primary dark:text-primaryDark">${splitText
        .slice(array[i][0], array[i][1] + 1)
        .join(' ')}</span>&nbsp;`;
    }
  }

  const startIndex = array[array.length - 1][1] + 1;
  finalText += splitText.slice(startIndex).join(' ');
  finalText += `</${htmlTag}>`;

  return finalText;
};
