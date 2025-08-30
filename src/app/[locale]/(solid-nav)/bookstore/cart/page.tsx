import { Metadata } from "next";
import React from "react";

import PageHeader from "@/components/heroes/page-header/PageHeader";
import { WEBSITE_BASE_URL } from "@/data/constants";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description:
    "View your cart and checkout items from The Wind Church bookstore.",
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/bookstore/cart`,
  },
};

const Cart = () => {
  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <PageHeader title="Cart" subtitle="Your shopping cart is empty." />
    </div>
  );
};

export default Cart;
