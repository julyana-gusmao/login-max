export const theme = {
  colors: {
    primary: "#CC6237",
    secondary: "#FEA501",
    gray: "#657593",
    white: "#ffffff",
    background: "#F9FBFF",
    text: "#1a1a1a",
    inputBg: "#f2f2f2",
  },
  font: {
    roboto: "'Roboto', sans-serif",
    poppins: "'Poppins', sans-serif",
  },
  fontSizes: {
    sm: "12px",
    base: "13px",
    md: "16px",
    lg: "20px",
    xl: "26px",
  },
  radius: {
    sm: "8px",
    lg: "20px",
    full: "999px",
  },
};

export type ThemeType = typeof theme;
