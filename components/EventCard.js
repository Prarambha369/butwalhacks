import React from "react";
import { Card, Heading, Text, Flex, Box, Badge, Button } from "theme-ui";
import Image from "next/image";
import Icon from "@hackclub/icons";

// Helper function for rendering date and location
function formatDate(dateStr) {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})
}

function renderDateAndLocation(date, location) {
  return (
    <>
      <Flex sx={{ mb: 2, alignItems: "center", color: "#666666" }}>
          <Icon glyph="calendar" size={16} style={{marginRight: "8px"}}/>
        <Text sx={{ fontSize: 1 }}>{formatDate(date)}</Text>
      </Flex>

      {location && (
        <Flex sx={{ mb: 2, alignItems: "center", color: "#666666" }}>
            <Icon glyph="location" size={16} style={{marginRight: "8px"}}/>
          <Text sx={{ fontSize: 1 }}>{location}</Text>
        </Flex>
      )}
    </>
  );
}

export default function EventCard({ event, isPastEvent = false }) {
  const { title, date, description, tags, location, image } = event;

  return (
    <Card
      sx={{
        p: 0,
        overflow: "hidden",
        borderRadius: "default",
        boxShadow: "card",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "elevated",
        },
      }}
    >
      <Box sx={{ position: "relative", height: 200 }}>
        <Image
          src={image || "/images/logo/red_logo/rlogo.svg"}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box sx={{ p: 3 }}>
        <Heading as="h3" sx={{ mb: 2, fontSize: 3, color: "#1a1a1a" }}>
          {title}
        </Heading>

        {renderDateAndLocation(date, location)}

        <Text sx={{ mb: 3, color: "#333333", fontSize: 1 }}>
          {description.length > 120
            ? `${description.substring(0, 120)}...`
            : description}
        </Text>

        <Flex sx={{ mb: 3, flexWrap: "wrap", gap: 2 }}>
          {tags &&
            tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                sx={{
                  bg: "#F0F0F0",
                  color: "#333333",
                  px: 2,
                  py: 1,
                  borderRadius: "pill",
                  border: "1px solid #E0E0E0",
                }}
              >
                {tag}
              </Badge>
            ))}
        </Flex>

        {!isPastEvent && (
          <Button
            sx={{
              width: "100%",
              bg: "primary",
              "&:hover": {
                bg: "secondary",
              },
            }}
          >
            Join Event
          </Button>
        )}
      </Box>
    </Card>
  );
}
