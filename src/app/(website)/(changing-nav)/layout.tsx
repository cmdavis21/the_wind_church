import Navbar from '@/components/navigation/navbar/Navbar';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      <div className="pb-3xl md:pb-4xl">{children}</div>
    </div>
  );
}
