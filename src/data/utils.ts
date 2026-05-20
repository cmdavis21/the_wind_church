export enum MediaType {
  IMAGE,
  VIDEO,
}

export const findMediaType = (url: string) => {
  const imageRegex = /\.(jpg|jpeg|png|webp|avif|gif|svg)/i;
  const videoRegex = /\.(mpg|mp2|mpeg|mpe|mpv|mp4|mov|wmv)/i;

  if (imageRegex.test(url)) {
    return MediaType.IMAGE;
  }

  if (videoRegex.test(url)) {
    return MediaType.VIDEO;
  }

  return null;
};

export const scrollToElem = (id: string) => {
  const location = document.getElementById(id);

  if (location) {
    window.scrollTo({
      left: 0,
      top: location.offsetTop - 100,
      behavior: 'smooth',
    });
  }
};

export const openWindowWithQuery = (query: string) => {
  const newWindow = window.open('about:blank', '_blank');
  if (newWindow) {
    newWindow.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
};

export const isValidEmail = (email: string) => {
  const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return pattern.test(email);
};

export const isValidPhone = (phone: string) => {
  const pattern = /^\d{10,11}$/;
  return pattern.test(phone);
};

export const combineNames = (names: { first_name: string; last_name: string }[]) => {
  if (!names || names.length === 0) return '';
  return names.map((n) => `${n.first_name} ${n.last_name}`).join(' & ');
};
