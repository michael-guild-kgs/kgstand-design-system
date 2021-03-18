import React from "react";
import { Brand1, Brand2, Brand5, BrandPrimary } from "../../foundation/colors";
import { ButtonPrimary, TextLinks } from "./button";

interface Button {
  variant: ["primary", "secondary", "secondary2"];
  size: ["small", "medium", "large"];
  label: string;
  onClick: () => {};
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, backgroundColor, size, label, ...props }) => {
  return (
    <>
      <ButtonPrimary>{label}</ButtonPrimary>

      <ButtonPrimary
        Color={BrandPrimary}
        BgColor={Brand1}
        HoverColor={Brand5}
        HoverBg={Brand2}
      >
        {label}
      </ButtonPrimary>

      <TextLinks>{label}</TextLinks>
    </>
  );
};
