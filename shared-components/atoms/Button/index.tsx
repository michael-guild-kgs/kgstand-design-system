import React from "react";
import { ButtonStyled } from "./button";

interface Button {
  label: string;
}

export const Button = ({ label, variant }) => {
  return <ButtonStyled variant={variant}>{label}</ButtonStyled>;
};
