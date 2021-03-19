import React from "react";
import { ButtonStyled } from "./button";

interface SecondaryButton {
  label: string;
}


export const SecondaryButton = ({label}) => {
  return (
    
       <ButtonStyled variant="secondary"> {label} </ButtonStyled>
    
  );
};
