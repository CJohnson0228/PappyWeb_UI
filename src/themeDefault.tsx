export const themeDefault = {
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#FFF'
    },
    primary: {
      main: '#2d43e5',
      light: '#4f65f7',
      dark: '#0b21c3',
      contrast: '#dddddd'
    },
    secondary: {
      main: '#43d76d',
      light: '#43f76f',
      dark: '',
      contrast: ''
    },
    error: {
      main: '',
      light: '',
      dark: '',
      contrast: ''
    },
    warning: {
      main: '',
      light: '',
      dark: '',
      contrast: ''
    },
    info: {
      main: '',
      light: '',
      dark: '',
      contrast: ''
    },
    success: {
      main: '',
      light: '',
      dark: '',
      contrast: ''
    },
    pastel: {
      red:    { light: '#ffdddd', main: '#ffa8a8', dark: '#cf5656' },
      orange: { light: '#fff0dd', main: '#ffdaa8', dark: '#cf9b56' },
      yellow: { light: '#fffedd', main: '#fffda8', dark: '#cfcc56' },
      green:  { light: '#cbebcd', main: '#88ce8c', dark: '#44a34a' },
      blue:   { light: '#e5ebfb', main: '#b9c7ed', dark: '#8a9ed5' },
      cyan:   { light: '#e2fbfb', main: '#b0e9e9', dark: '#7bcccc' },
      purple: { light: '#f3e4fb', main: '#d9b6ed', dark: '#b885d5' },
      mono:   { light: '#f7f7f7', main: '#dddddd', dark: '#c5c5c5' },
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.12)'
    },
    background: {
      paper: '#FFF',
      default: '#FFF',
    }, 
    getContrastText: (color: string) => {
      if (color.indexOf('#') === 0) { color = color.slice(1) }
      if (color.length === 3) { color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2] }
      if (color.length !== 6) { throw new Error('Invalid HEX color.') }
      var r = ( parseInt(color.substr(0, 2), 16));
      var g = ( parseInt(color.substr(2, 2), 16));
      var b = ( parseInt(color.substr(4, 2), 16));
      var y = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      if ( y >= 128 ) {
        return( '#111111')
      } else {
        return('#eeeeee')
      }
    }  
  },
  spacing: (spacing: number) => `${8 * spacing}px`,
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    pxToRem: (size: number, htmlFontSize: number) => `${(size/htmlFontSize)}rem`,
    h1: {
      fontFamily: "",
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em'
    }
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    tooltip: 1400,
  }
}