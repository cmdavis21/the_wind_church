import Navbar from '@/components/navigation/navbar/Navbar';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar solidNav />
      <div className="pt-5xl sm:pt-6xl pb-xxl sm:pb-3xl">{children}</div>
    </div>
  );
}
