import React from "react";
import { Card, Heading, Text, Box, Link, Flex } from "theme-ui";
import Image from "next/image";
import { ExternalLink } from "@hackclub/icons";

function getTierStyle(tier) {
  // Define tier-specific styles
  const tierStyles = {
    Platinum: {
      borderColor: "#E5E4E2",
      shadow: "0 8px 30px rgba(229, 228, 226, 0.3)",
    },
    Gold: {
      borderColor: "#FFD700",
      shadow: "0 8px 30px rgba(255, 215, 0, 0.3)",
    },
    Silver: {
      borderColor: "#C0C0C0",
      shadow: "0 8px 30px rgba(192, 192, 192, 0.3)",
    },
    Bronze: {
      borderColor: "#CD7F32",
      shadow: "0 8px 30px rgba(205, 127, 50, 0.3)",
    },
  };
  return tierStyles[tier] || tierStyles.Bronze;
}

export default function SponsorCard({ sponsor }) {
  const { name, description, logo, website, tier } = sponsor;
  const style = getTierStyle(tier);

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: "default",
        boxShadow: "card",
        transition: "all 0.3s ease-in-out",
        borderTop: "4px solid",
        borderColor: style.borderColor,
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: style.shadow,
        },
      }}
    >
      <Flex sx={{ alignItems: "center", mb: 3 }}>
        <Box
          sx={{
            position: "relative",
            width: 80,
            height: 80,
            mr: 3,
            flexShrink: 0,
          }}
        >
          <Image
            src={logo || "/assets/logo/red_logo/rlogo.png"}
            alt={`${name} logo`}
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box>
          <Heading as="h3" sx={{ fontSize: 3, mb: 1 }}>
            {name}
          </Heading>
          <Text
            sx={{
              fontSize: 1,
              color: "muted",
              display: "inline-block",
              px: 2,
              py: 1,
              bg: "background",
              borderRadius: "pill",
              border: "1px solid",
              borderColor: style.borderColor,
            }}
          >
            {tier} Sponsor
          </Text>
        </Box>
      </Flex>
      <Text sx={{ mb: 3, fontSize: 1 }}>{description}</Text>
      {website && (
        <Link
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: "primary",
            textDecoration: "none",
            fontSize: 1,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Visit Website <ExternalLink size={16} style={{ marginLeft: "4px" }} />
        </Link>
      )}
    </Card>
  );
}
