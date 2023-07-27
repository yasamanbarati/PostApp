export const palette = {
  neutral: {
    main: '#fff',
  },
  gray: {
    main: '#ececec',
    contrastText: '#888888',
  },
  primary: {
    main: '#174742',
    contrastText: '#9dffe9',
  },
  black: '#071813',
  red: '#c3314c',
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
