import Navbar from '@/components/navigation/navbar/Navbar';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar solidNav />
      <div className="nav-padding pb-padding lg:pb-4xl">{children}</div>
    </div>
  );
}
