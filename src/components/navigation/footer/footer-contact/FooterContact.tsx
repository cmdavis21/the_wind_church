"use client";

import { FooterColumnItem } from "@/data/types";

import FooterLogoAndSocials from "../footer-logo-and-socials/FooterLogoAndSocials";
import FooterColumn from "../footer-column/FooterColumn";


interface FooterContactProps {
  address: FooterColumnItem;
  hours: FooterColumnItem;
  contact: FooterColumnItem;
}

const FooterContact: React.FC<FooterContactProps> = ({
  address,
  hours,
  contact,
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row flex-wrap lg:justify-between gap-[25px]">
      <FooterLogoAndSocials />
      <div className="flex flex-col lg:flex-row gap-[25px] md:gap-[50px]">
        <FooterColumn label={address.label} row={address.row} />
        <FooterColumn label={hours.label} row={hours.row} />
        <FooterColumn label={contact.label} row={contact.row} />
      </div>
    </div>
  );
};

export default FooterContact;
