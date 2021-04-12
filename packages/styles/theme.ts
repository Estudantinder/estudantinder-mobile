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
  logo: 'Poppins_800ExtraBold',
}

export const lightTheme: Theme = {
  name: 'light',

  base: {
    green: '#0FAD58',
    purple: '#6D36DA',
    secondary_purple: '#3900BB',
  },
  text: {
    default: '#000000',
    button: '#ffffff',
  },
  icon: {
    default: '#2d2d2d',
  },
  input: {
    background: '#F0F0F0',
    active_text: '#2D2D2D',
    placeholder: '#D2D2D2',
    error: '#E50302',
  },
  background: {
    default: '#ffffff',
    light_purple: '#F3EDFF',
  },
  pages: {
    contacts: {
      inputs: {
        facebook: '#dfe5f2',
        instagram: '#fde6ef',
        whatsapp: '#e0efdf',
        twitter: '#d2ecfc',
      },
    },
    home: {
      topbar: {
        icons: '#FFFFFF',
        background: '#0FAD58',
      },
    },
  },
  components: {
    divider: '#E8E6E6',
    photos: {
      pagination: { active_dot: '#646464', inactive_dot: '#AFAFAF' },
    },
  },
}

export const darkTheme: Theme = {
  name: 'dark',

  base: {
    green: '#0CAB55',
    purple: '#8470E0',
    secondary_purple: '#8470E0',
  },
  icon: {
    default: '#d2d2d2',
  },
  text: {
    default: '#E8E8E8',
    button: '#f0f0f0',
  },
  input: {
    active_text: '#C7C7C7',
    background: '#222222',
    error: '#FF2E2E',
    placeholder: '#4F4E4E',
  },
  background: {
    default: '#141414',
    light_purple: '#222222',
  },
  pages: {
    contacts: {
      inputs: {
        facebook: '#222',
        instagram: '#222',
        whatsapp: '#222',
        twitter: '#222',
      },
    },
    home: {
      topbar: {
        icons: '#797979',
        background: '#1F1F1F',
      },
    },
  },
  components: {
    divider: '#262424',
    photos: {
      pagination: { active_dot: '#A0A0A0', inactive_dot: '#595959' },
    },
  },
}
