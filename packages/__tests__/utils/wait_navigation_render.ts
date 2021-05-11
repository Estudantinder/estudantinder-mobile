import { act } from 'react-test-renderer'

export async function waitNavigationRender(ms = 0) {
  return await act(async () => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  })
}
