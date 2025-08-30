"use client";

import { NextStudio } from "next-sanity/studio";
import sanityConfig from "../../../../../sanity.config";

const AdminStudio = () => {
  return <NextStudio config={sanityConfig} />;
};

export default AdminStudio;
