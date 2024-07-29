import { extendTheme } from '@chakra-ui/react';
// import { mode } from '@chakra-ui/theme-tools';

export default extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      body: {
        // color: mode('gray.700', 'whiteAlpha.900')(props),
        // bg: mode('gray.50', '#08080b')(props),
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        'box-sizing': 'border-box',
      },
    }),
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu',
  },
  colors: {
    primary: '#1591EA',
    textPrimary: '#2F3438',
    textSecondary: '#2C2C2C',
    textFooter: '#6E6E6E',
    iconOutline: '#4B4B4B',
    border: '#DADDE0',
    yurta: {
      900: '#1591EA',
      800: '#2F3438',
      700: '#2C2C2C',
      600: '#6E6E6E',
      500: '#4B4B4B',
      400: '#DADDE0',
    },
  },
});
