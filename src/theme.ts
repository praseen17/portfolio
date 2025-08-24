import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
};

const fonts = {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif',
};

const styles = {
  global: (props: any) => ({
    'html, body': {
      scrollBehavior: 'smooth',
      bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
      color: props.colorMode === 'dark' ? 'white' : 'gray.800',
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'semibold',
      borderRadius: 'md',
      _focus: {
        boxShadow: 'none',
      },
    },
    variants: {
      solid: (props: any) => ({
        bg: 'brand.500',
        color: 'white',
        _hover: {
          bg: 'brand.600',
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
          _disabled: {
            bg: 'brand.500',
          },
        },
        _active: {
          bg: 'brand.700',
        },
      }),
      outline: (props: any) => ({
        borderColor: 'brand.500',
        color: 'brand.500',
        _hover: {
          bg: 'rgba(14, 165, 233, 0.1)',
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
      }),
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components,
});

export { theme };
