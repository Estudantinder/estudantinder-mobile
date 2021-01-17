import React, { Fragment } from 'react'

import {
  InputBottomContainer,
  InputBottomIcon,
  InputBottomText,
} from 'views/styles/globalStyles'

export interface InputBottomProps {
  text?: string
  informative?: boolean
}

const InputBottom: React.FC<InputBottomProps> = (props) => {
  const style = props.informative ? { color: '#9b9b9b' } : {}

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
