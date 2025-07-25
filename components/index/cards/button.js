import React from "react";
import {Box, Button, Text} from "theme-ui";
import ReactTooltip from "../../react-tooltip";
import Icon from "@hackclub/icons";

/**
 * Renders a styled button with optional icon, tooltip, and link functionality.
 *
 * Displays a button or anchor element with customizable appearance, including primary styling, background color override, and stacking order. Supports displaying an icon, tooltip content, and opening a specified link in a new tab. Tooltip content is static and shown on hover.
 *
 * @param {React.ReactNode} children - The button label or content.
 * @param {string} [icon] - Optional icon glyph name to display.
 * @param {string} [id] - Identifier for associating the tooltip.
 * @param {React.ReactNode} [content] - Tooltip content to display on hover.
 * @param {string} [link] - URL to open when the button is clicked.
 * @param {boolean} [primary] - If true, applies primary button styling.
 * @param {string} [overrideColor] - Custom background color for the button.
 * @param {number} [zIndex] - Stacking order for the button container.
 * @returns {JSX.Element} The rendered button component.
 */
export default function Buttons({
  children,
  icon,
  id,
  content,
  link,
  primary,
  overrideColor,
  zIndex,
  ...props
}) {
    let fontWeight = primary ? "700" : "400";

  return (
    <Box
      as="button"
      sx={{
          background: "transparent",
          border: "none",
          color: "white",
          zIndex: zIndex || 0,
      }}
      py={1}
    >
      <Button
        data-place="right"
        data-for={id}
        data-effect="solid"
        data-tip
        sx={{
            background: primary || overrideColor || "rgb(255, 255, 255, 0.3)",
            borderRadius: "100px",
            border: "none",
            display: "flex",
            alignItems: "center",
            color: "inherit",
            px: "3",
            py: primary ? "12px" : 2,
            width: "fit-content",
            textTransform: "none",
            fontWeight: "400",
            fontSize: primary ? ["18px", "20px", "22px"] : [1, "16px", "18px"],
            backdropFilter: "blur(2px)",
            fontWeight: fontWeight,
            zIndex: 999,
        }}
        as="a"
        href={link || "/"}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        <Icon
            glyph={icon || "plus-fill"}
            sx={{color: "inherit", marginRight: 2}}
          size={24}
          mr={2}
        />
          <Text sx={{fontFamily: "Phantom Sans", textAlign: "left"}}>
          {children}
        </Text>
      </Button>
      <ReactTooltip
        id={id}
        delayShow={150}
        delayHide={100}
        delayUpdate={500}
        clickable={true}
        getContent={() => {
            return null;
        }}
        className="custom-tooltip-radius custom-arrow-radius"
        arrowRadius="2"
        tooltipRadius="10"
      >
        {content}
      </ReactTooltip>
    </Box>
  );
}
