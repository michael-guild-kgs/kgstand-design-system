import React from "react";
import { StyledCheckbox, LabelCheckbox } from "./checkbox";

interface Checkboxx {
  label: string;
}

export const Checkboxx = ({ label }) => {
  return (
    <LabelCheckbox>
      <StyledCheckbox /> {label}
    </LabelCheckbox>
  );
};
