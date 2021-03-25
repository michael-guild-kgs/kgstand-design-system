import React from "react";
import { TextLinkStyled } from "../Link/link";

interface TextLink {
  label: string;
}

export const TextLink = ({ label }) => {
  return <TextLinkStyled>{label}</TextLinkStyled>;
};
