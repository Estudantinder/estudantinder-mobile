import React, { Fragment } from 'react'

import Styled from './styles'

export interface InputInfoProps {
  informative?: boolean
  children?: string
}

const InputInfo: React.FC<InputInfoProps> = (props) => {
  const style = props.informative ? { color: '#9b9b9b' } : {}

  return (
    <Styled.Container>
      {props.children && (
        <Fragment>
          <Styled.Icon style={style} />
          <Styled.Text style={style}>{props.children}</Styled.Text>
        </Fragment>
      )}
    </Styled.Container>
  )
}

export default InputInfo
