import React from "react";
import { ButtonStyled } from "./button";

interface Button {
  label: string;
  
}

export const Button = ({ label, backgroundColor }) => {
  return <ButtonStyled 
           style={backgroundColor && {backgroundColor}}
  > {label} </ButtonStyled>;
};
