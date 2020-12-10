import React from 'react'

import FooterStyled from 'src/styles/components/Footer.styled'

export interface IFooterProps {
  onPress(): void
  title: string
}

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <FooterStyled.Container>
      <FooterStyled.Button onPress={props.onPress}>
        <FooterStyled.ButtonText>{props.title}</FooterStyled.ButtonText>
      </FooterStyled.Button>
    </FooterStyled.Container>
  )
}

export default Footer
