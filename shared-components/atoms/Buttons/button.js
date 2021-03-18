import styled from "styled-components";
import { White, BrandPrimary, Brand5, Brand1, Brand2 } from "../../foundation/colors";
import {TextLink, Button} from "../../foundation/typography"
import { Small, XSmall } from "../../foundation/units";

export const GeneralButton = `
  border:1px solid transparent;
  margin:2px;
  padding: ${XSmall}px ${Small}px;
  letter-spacing: 0.38px;
  border-radius:4px; 
  opacity: 1;
`
export const  ButtonPrimary = styled(Button)`
  ${GeneralButton}
  color: ${props => props.Color || White}; 
  background-color: ${props => props.BgColor || BrandPrimary};
  
  &:hover {
    color: ${props => props.HoverColor || White};
    background-color: ${props => props.HoverBg || Brand5};
  }
`
export const TextLinks = styled(TextLink)`
  ${GeneralButton}
  color:${BrandPrimary};
  
  &:hover {
    color:${Brand5};
  }
`

