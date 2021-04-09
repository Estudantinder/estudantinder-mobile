import { Fonts, Theme } from './styled'

export const fonts: Fonts = {
  titles: {
    primary: 'Poppins_500Medium',
    secondary: 'Poppins_600SemiBold',
  },
  subtitle: 'Archivo_400Regular',
  primary: 'NotoSans_700Bold',
  button: 'NotoSans_700Bold',
  input: {
    label: 'Archivo_600SemiBold',
    text: 'NotoSans_400Regular',
  },
}

export const lightTheme: Theme = {
  name: 'light',
  green: '#0FAD58',
  purple: '#6D36DA',
  dark_purple: '#3900BB',
  light_purple: '#F3EDFF',
  background: '#fff',
  input: {
    background: '#F0F0F0',
    active_border: '#6D36DA',
    active_text: '#2D2D2D',
    placeholder: '#D2D2D2',
    label: '#000000',
    error: '#E50302',
  },
}

export const darkTheme: Theme = {
  name: 'dark',
  green: '#0FAD58',
  purple: '#8470E0',
  dark_purple: '#8470E0',
  light_purple: '#222222',
  background: '#141414',
  input: {
    background: '#F0F0F0',
    active_border: '#6D36DA',
    active_text: '#2D2D2D',
    placeholder: '#D2D2D2',
    label: '#000000',
    error: '#E50302',
  },
}
