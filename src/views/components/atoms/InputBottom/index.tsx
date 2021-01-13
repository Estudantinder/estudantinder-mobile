import React, { Fragment } from 'react'

import {
  InputBottomContainer,
  InputBottomIcon,
  InputBottomText,
} from 'views/styles/globalStyles'

export interface InputBottomProps {
  text?: string
  customColor?: string
}

const InputBottom: React.FC<InputBottomProps> = (props) => {
  const style = props.customColor ? { color: props.customColor } : {}

  return (
    <InputBottomContainer>
      {props.text && (
        <Fragment>
          <InputBottomIcon style={style} />
          <InputBottomText style={style}>{props.text}</InputBottomText>
        </Fragment>
      )}
    </InputBottomContainer>
  )
}

export default InputBottom
