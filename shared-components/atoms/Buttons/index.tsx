import React from "react";
import { ButtonStyled } from "./button";

interface Button {
  label: string;
}


export const Button = ({label}) => {
  return (
    
      <ButtonStyled variant="primary">
        {label}
      </ButtonStyled> 
    
  );
};
