import React from "react";
import { TextLinks } from "./button";

interface TextLinkButton {
  label: string;
}

export const TextLinkButton = ({ label }) => {
  return <TextLinks>{label}</TextLinks>;
};
