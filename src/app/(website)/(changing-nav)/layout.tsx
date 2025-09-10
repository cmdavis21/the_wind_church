import { Metadata } from "next";

import Navbar from "@/components/navigation/navbar/Navbar";
import { WEBSITE_BASE_URL } from "@/data/constants";

export const metadata: Metadata = {
  title: {
    default: "The Wind Church",
    template: "%s | The Wind Church",
  },
  description:
    "Christ-driven, Foursquare church located in Riverside, California",
  publisher: "The Wind Church",
  alternates: {
    canonical: WEBSITE_BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
