"use client";

import React from "react";

import UpArrow from "@/components/icons/upArrow";
import { openWindowWithQuery } from "@/data/hooks";

interface OpenWindowWithQueryButtonProps {
  label: string;
  query?: string;
}

const OpenWindowWithQueryButton: React.FC<OpenWindowWithQueryButtonProps> = ({
  label,
  query,
}) => {
  return (
    <a
      onClick={() => openWindowWithQuery(query ?? label)}
      className="w-fit group hover:cursor-pointer"
    >
      <div className="flex items-center gap-xs">
        <UpArrow className="fill-blue dark:fill-softBlue rotate-45 group-hover:rotate-90 transition-all duration-300" />
        <h5 className="text-blue dark:text-softBlue group-hover:underline font-bold">
          {label}
        </h5>
      </div>
    </a>
  );
};

export default OpenWindowWithQueryButton;
