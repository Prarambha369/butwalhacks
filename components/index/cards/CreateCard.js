import React from "react";
import { Box, Heading, Text, Button, Image } from "theme-ui";

export default function CreateCard() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #ec3750 0%, #1e50a0 100%)",
        color: "white",
        textAlign: "center",
        p: [4, 5],
        borderRadius: "2xl",
        boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        position: "relative",
        overflow: "hidden",
        minHeight: 340,
      }}
    >
      <Box mb={3}>
        <Image
          src="/assets/logo/rlogo.svg"
          alt="Create a new card"
          sx={{ width: 72, height: 72, mx: "auto", mb: 2 }}
        />
        <Heading
          as="h2"
          sx={{
            fontSize: [4, 5],
            mb: 2,
            letterSpacing: "tight",
            fontWeight: "bold",
          }}
        >
          Create a New Card
        </Heading>
        <Text
          as="p"
          sx={{ fontSize: [2, 3], mb: 3, color: "white", opacity: 0.95 }}
        >
          Most things on the homepage are cards! Cards are modular, creative,
          and easy to add or remove. Try making your own for a project, event,
          or idea—make it as unique as you want, like a mini poster!
        </Text>
        <Button
          as="a"
          href="#"
          variant="primary"
          sx={{
            fontWeight: "bold",
            fontSize: 2,
            px: 4,
            py: 2,
            borderRadius: "circle",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          }}
        >
          Get Started
        </Button>
      </Box>
      <Box sx={{ position: "absolute", bottom: 16, right: 16, opacity: 0.15 }}>
        <Image
          src="/assets/logo/rlogo.svg"
          alt="Card background"
          sx={{ width: 96, height: 96 }}
        />
      </Box>
    </Box>
  );
}
