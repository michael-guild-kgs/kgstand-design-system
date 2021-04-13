import styled from "styled-components";
import { BrandPrimary, Brand5} from "../../foundation/colors";
import {TextLink} from "../../foundation/typography"
import { Small, XSmall } from "../../foundation/units";

export const TextLinkStyled = styled(TextLink)`
    letter-spacing: 0.38px;
    color:${BrandPrimary};

    &:hover {
        color:${Brand5};
    }
`