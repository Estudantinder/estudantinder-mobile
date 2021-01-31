const theme = {
  colors: {
    primary: {
      green: '#0FAD58',
      purple: '#6D36DA',
    },
    background: {
      light_purple: '#F3EDFF',
      page: '#fff',
    },
    input: {
      background: '#F0F0F0',
      active_border: '#6D36DA',
      active_text: '#2D2D2D',
      placeholder: '#D2D2D2',
      label: '#000000',
      error: '#E50302',
    },
  },
  fonts: {
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
      error: 'Archivo_600SemiBold',
    },
  },
} as const

export default theme
