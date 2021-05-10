import { Theme } from 'packages/styles/styled'
import { lightTheme } from 'packages/styles/theme'

export default function theme(props: { theme: Theme }) {
  if (Object.keys(props.theme).length < 1) return lightTheme

  return props.theme
}
