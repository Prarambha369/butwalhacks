import baseTheme from "@hackclub/theme";

const theme = {
  ...baseTheme,
  initialColorModeName: "default",
  colors: {
    ...baseTheme.colors,
    text: "#1A202C",
    background: "#FFFFFF",
    primary: "#1E50A0",
    secondary: "#D22F27",
    accent: "#E75B25",
    highlight: "#F3B297",
    muted: "#707580", // Changed from #F3B297 to a darker gray for better contrast in light mode
    modes: {
      dark: {
        text: "#fff",
        background: "#23272f",
        primary: "#1E50A0",
        secondary: "#D22F27",
        accent: "#E75B25",
        highlight: "#F3B297",
        muted: "#c0c4cc", // Changed from #2d323b to a lighter gray for better contrast in dark mode
      },
    },
  },
  styles: {
    ...baseTheme.styles,
    root: {
      ...baseTheme.styles.root,
      transition: "all 0.3s ease-in-out",
    },
  },
};

export default theme;
