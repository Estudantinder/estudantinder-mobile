import { RefObject } from 'react'

export default <T>() => {
  const refMock: RefObject<T> = { current: null }

  return refMock
}
