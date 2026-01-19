import Navbar from '@/components/navigation/navbar/Navbar';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
