import { Metadata } from "next";
import React from "react";

import PageHeaderWithBackground from "@/components/heroes/page-header-with-background/PageHeaderWithBackground";
import { WEBSITE_BASE_URL } from "@/data/constants";

export const metadata: Metadata = {
  title: "Bookstore",
  description:
    "Shop faith-based books, apparel, and gifts in The Wind Church bookstore—equipping you for your spiritual journey.",
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/bookstore`,
  },
};

const Bookstore = () => {
  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <PageHeaderWithBackground
        media={{
          src: "/placeholder-media/open_sign.webp",
          alt: "Decorative Background Image",
          poster: "",
        }}
        title="Bookstore"
        subtitle="Grab the latest Wind Gear and supplies here."
      />
    </div>
  );
};

export default Bookstore;
