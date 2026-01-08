import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanity.io Studio | The Wind Church',
  description: 'The Sanity.io Dashboard Studio for the Wind Church Website.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
