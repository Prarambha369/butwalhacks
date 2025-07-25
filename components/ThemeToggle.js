import React from "react";
import { useColorMode, Button } from "theme-ui";
import Icon from "@hackclub/icons";

/**
 * React component that toggles between light and dark color modes.
 *
 * Renders a button that switches the application's color mode when clicked, updating the icon and accessible label to reflect the current mode.
 */
export default function ThemeToggle() {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === "dark";

  const toggleColorMode = () => {
    setColorMode(isDark ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleColorMode}
      variant="outline"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
          p: 0,
          borderRadius: 0,
        color: "text",
          border: "none",
        cursor: "pointer",
          '&:hover': {
              bg: 'transparent',
          opacity: 0.8,
        },
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Icon
        glyph={isDark ? "flag" : "flag-fill"}
        size={24}
        is="svg"
        sx={{ color: "text" }}
      />
    </Button>
  );
}
