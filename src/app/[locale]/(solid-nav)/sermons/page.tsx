import { Metadata } from "next";
import React from "react";

import SermonsClient from "./nossr";

import { WEBSITE_BASE_URL } from "@/data/constants";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Watch or listen to recent sermons from The Wind Church and grow in your faith anytime, anywhere.",
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/sermons`,
  },
};

const Sermons = async () => <SermonsClient />;

export default Sermons;
