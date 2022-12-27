export const palette = {
  neutral: {
    main: '#fff',
  },
  gray: {
    main: '#ececec',
    contrastText: '#888888',
  },
  primary: {
    main: '#658fff',
    contrastText: '#e6f4ff',
  },
  black: '#000000',
  red: '#EE6D57',
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    gray: Palette['primary']
    primary: Palette['primary']
    black: string
    red: string
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
    gray?: PaletteOptions['primary']
    primary?: PaletteOptions['primary']
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
    gray: true
    primary: true
  }
}
