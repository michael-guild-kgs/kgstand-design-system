import styled from "styled-components";
import { White, BrandPrimary, Brand5, Brand1, Brand2 } from "../../foundation/colors";
import {ButtonAsLink, Button} from "../../foundation/typography"
import { Small, XSmall } from "../../foundation/units";
import css from '@styled-system/css';
import { variant } from 'styled-system';


export const GeneralButton = `
  border:1px solid transparent;
  margin:2px;
  padding: ${XSmall}px ${Small}px;
  letter-spacing: 0.38px;
  border-radius:4px; 
  opacity: 1;
`

export const variants = {
	primary: {
		color: `${White}`,
		backgroundColor: `${BrandPrimary}`,

    '&:hover': {
      color: `${White}`,
      backgroundColor: `${Brand5}`,
		}
	},
	secondary: {
		color: `${BrandPrimary}`,
		backgroundColor: `${Brand1}`,

    '&:hover': {
      color: `${Brand5}`,
      backgroundColor: `${Brand2}`,
		}
	},
};

export const ButtonStyled = styled(Button)(
	css({
	  border:`1px solid transparent`,
    margin:`2px`,
    padding: `${XSmall}px ${Small}px`,
    letterSpacing: `0.40px`,
    borderRadius:`4px`, 
    opacity: `1`,
  }),
	variant({ variants })
);

export const TextLinks = styled(ButtonAsLink)`
  ${GeneralButton}
  color:${BrandPrimary};
  
  &:hover {
    color:${Brand5};
  }
`