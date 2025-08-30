import React from "react";
import { getTranslations } from "next-intl/server";

import { FooterColumnItem } from "@/data/types";

import FooterColumn from "./footer-column/FooterColumn";
import FooterContact from "./footer-contact/FooterContact";
import FooterContactSignup from "./footer-contact-signup/FooterContactSignup";


const Footer = async () => {
  const t = await getTranslations("Footer");
  const about: FooterColumnItem = t.raw("about");
  const windFamily: FooterColumnItem = t.raw("windFamily");
  const moreWind: FooterColumnItem = t.raw("moreWind");
  const address: FooterColumnItem = t.raw("address");
  const hours: FooterColumnItem = t.raw("hours");
  const contact: FooterColumnItem = t.raw("contact");

  return (
    <div className="p-[25px] md:p-[50px] 2xl:p-[100px] min-[1800px]:px-[200px] min-[1800px]:py-[150px] w-full flex flex-col gap-[50px]">
      <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] md:pb-[50px] 2xl:pb-[70px]">
        <FooterColumn label={about.label} row={about.row} />
        <FooterColumn label={windFamily.label} row={windFamily.row} />
        <FooterColumn label={moreWind.label} row={moreWind.row} />
        <FooterContactSignup />
      </div>
      <FooterContact address={address} contact={contact} hours={hours} />
    </div>
  );
};

export default Footer;
