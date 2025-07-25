import {Box, Text} from "theme-ui";
import CarouselCards from "./CarouselCards";
import Ticker from "react-ticker";
import React, {useState} from "react";
import PageVisibility from "react-page-visibility";

/**
 * Displays a horizontally scrolling carousel of project cards that pauses when the page is not visible and adjusts scrolling speed on mouse hover.
 *
 * The carousel only renders when the page is visible and allows users to slow down or speed up the ticker by hovering over the card area.
 * @param {Object[]} cards - Array of card data to display in the carousel.
 */

export default function Carousel({ cards }) {
  const [speed, setSpeed] = useState(5);
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };

  return (
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
            <Box
                sx={{
                  mt: 4,
                  width: "100vw",
                  maxWidth: "100vw",
                  overflow: "hidden",
                  px: 0,
                  mx: 0,
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
            >
              <Text
                  variant="eyebrow"
                  as="h4"
                  sx={{
                    fontSize: ["22px", 2, 3],
                    mt: [4, 4, 5],
                    maxWidth: "layout",
                    width: "90vw",
                    margin: "auto",
                  }}
              >
                Here are a few projects you could get involved in:
              </Text>
              <Ticker speed={speed} sx={{overflowX: "hidden", width: "100vw"}}>
                {() => (
                    <Box
                        as="div"
                        sx={{display: "flex", py: [4, 5, 5]}}
                        onMouseOver={() => setSpeed(2)}
                        onMouseOut={() => setSpeed(6)}
                    >
                      {cards.map((card, idx) => (
                          <CarouselCards key={idx} {...card} />
                      ))}
                    </Box>
                )}
              </Ticker>
            </Box>
        )}
      </PageVisibility>
  );
}
