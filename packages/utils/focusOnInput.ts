import { RefObject } from 'react'

import { FormHandles } from '@unform/core'
import env from 'env'

export default (ref: RefObject<FormHandles>, inputName: string) => {
  const inputRef = ref.current?.getFieldRef(inputName)

  if (env().env_name === 'test') return inputRef.props.onFocus()

  return inputRef.focus()
}
