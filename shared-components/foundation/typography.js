import styled from "styled-components";

const fontFamily = 'helvetica'

const displayVariations = {
      XLarge: 56, // h1
      Large: 48, // h2
      Medium: 40, // h3
      Small: 32,
    }

const getDisplay = (size) => {
  return `
    font-family: ${fontFamily};
    font-size: ${displayVariations[size]};
  `
}

export const DisplayXLargeStyles = getDisplay('XLarge')
export const DisplayXLarge = styled.h1`
  ${DisplayXLargeStyles}
`
export const DisplayLargeStyles = getDisplay('Large')
export const DisplayLarge = styled.h2`
  ${DisplayLargeStyles}
`

export const DisplayMediumStyles = getDisplay('Medium')
export const DisplayMedium = styled.h3`
  ${DisplayMediumStyles}
`
export const DisplaySmallStyles = getDisplay('Small')
export const DisplaySmall = styled.h4`
  ${DisplaySmallStyles}
`

export const HeadingStyles = `
  font-family: ${fontFamily};
  font-size: 24px;
  font-weight: bold;
`
export const Heading = styled.h1`
  ${HeadingStyles}
`

export const SubHeadingStyles = `
  font-family: ${fontFamily};
  font-size: 20px;
`
export const SubHeading = styled.h2`
  ${SubHeadingStyles}
`

export const LabelStyles = `
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: bold;
`
export const Label = styled.label`
  ${LabelStyles} 
`

export const BodyStyles = `
  font-family: ${fontFamily};
  font-size: 16px;
`
export const Body = styled.body`
  ${BodyStyles}
`

export const ButtonStyles = `
  font-family: ${fontFamily};
  font-size: 14px;
  font-weight: bold;
`
export const Button = `
  ${ButtonStyles}
`

export const TextLinkStyles = `
  font-family: ${fontFamily};
  font-size: 14px;
  text-decoration:underline;
`
export const TextLinkc = styled.p`
  ${TextLinkStyles}
`

export const CaptionStyles = `
  font-family: ${fontFamily};
  font-size: 12px;
`
export const Caption = styled.small`
  ${CaptionStyles}
`

