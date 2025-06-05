export const theme = {
  colors: {
    primary: {
      100: "#CC6237", 
      90: "#CC6237E6",   
      50: "#CC623780",   
      10: "#CC62371A",  
    },
    secondary: "#FEA501",
    gray: "#657593",
    white: "#ffffff",
    background: "#F9FBFF",
    text: "#1a1a1a",
    inputBg: "#f2f2f2",
    black: {
      100: "#1a1a1a",
      90: "#1a1a1aE6",
      50: "#1a1a1a80",
      10: "#1a1a1a1A",
      5: "#1a1a1a0D",
    }
  },
  font: {
    roboto: "'Roboto', sans-serif",
    poppins: "'Poppins', sans-serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "13px",
    base: "14px",
    md: "16px",
    lg: "20px",
    xl: "26px",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  radius: {
    sm: "8px",
    lg: "20px",
    full: "999px",
  },
};

export type ThemeType = typeof theme;
