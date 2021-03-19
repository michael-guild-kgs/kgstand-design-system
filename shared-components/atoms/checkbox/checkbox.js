import styled from "styled-components";
import { BrandPrimary, Gray1 } from "../../foundation/colors";
import  { Label } from "../../foundation/typography";


export const LabelCheckbox = styled(Label)`
     color:${Gray1};
`

export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
     
      margin:12px;

      &:active {
        background-color:${BrandPrimary};
    } 
      
`