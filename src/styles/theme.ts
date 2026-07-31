export const theme = {
  colors: {
    background: '#232323',
    surface: '#191A20',
    surfaceCheckout: '#2B2B2B',
    surfaceAlt: '#393939',
    text: '#FFFFFF',
    subtitle: '#CCCCCC',
    primary: '#FF8310',
    primaryHover: '#FF9A3D',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '20px',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  layout: {
    maxWidth: '1728px',
  },
} as const;

export type AppTheme = typeof theme;
