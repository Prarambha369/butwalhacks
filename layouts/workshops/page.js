"use client";
import { useEffect, useState } from "react";
import { Box, Heading, Grid, Card, Text, Button, Badge, Flex } from "theme-ui";
import workshopsData from "../../lib/workshops.json";

export default function WorkshopsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Use static data instead of API call
    setEvents(workshopsData.records || []);
  }, []);

  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner': return '#10B981';
      case 'intermediate': return '#F59E0B';
      case 'advanced': return '#EF4444';
      default: return '#6B7280';
    }
  };

  return (
    <Box sx={{ px: 4, py: 5, bg: "background", color: "text" }}>
      <Heading as="h1" sx={{ mb: 5, fontSize: [4, 5], textAlign: "center" }}>
        Upcoming & Past Workshops
      </Heading>
      <Grid columns={[1, 2]} gap={4}>
        {events.map(({ id, fields }) => (
          <Card 
            key={id} 
            sx={{ 
              p: 4, 
              bg: "white", 
              borderRadius: 3, 
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)", 
              border: "1px solid #E9ECEF",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              }
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  width: "100%",
                  height: 200,
                  bg: "#F8F9FA",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 6,
                  color: "#EC3750",
                  mb: 3
                }}
              >
                🚀
              </Box>
              <Heading as="h3" sx={{ mb: 2, fontSize: [3, 4], color: "#2C3E50" }}>
                {fields.Title}
              </Heading>
              <Text sx={{ mb: 3, color: "#7F8C8D", lineHeight: 1.6, fontSize: [2, 3] }}>
                {fields.Description}
              </Text>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Flex sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Text sx={{ fontSize: 2, color: "#2C3E50", fontWeight: 600 }}>
                  📅 {fields.Date}
                </Text>
                <Text sx={{ fontSize: 2, color: "#2C3E50", fontWeight: 600 }}>
                  ⏰ {fields.Time}
                </Text>
              </Flex>
              <Flex sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Text sx={{ fontSize: 2, color: "#2C3E50" }}>
                  👨‍🏫 {fields.Instructor}
                </Text>
                <Text sx={{ fontSize: 2, color: "#2C3E50" }}>
                  ⏱️ {fields.Duration}
                </Text>
              </Flex>
              <Badge 
                sx={{ 
                  bg: getLevelColor(fields.Level), 
                  color: "white", 
                  px: 2, 
                  py: 1, 
                  borderRadius: 2,
                  fontSize: 1,
                  fontWeight: 600
                }}
              >
                {fields.Level}
              </Badge>
            </Box>
            
            {fields.RegistrationLink && (
              <Button
                as="a"
                href={fields.RegistrationLink}
                sx={{ 
                  mt: 3,
                  bg: "#EC3750",
                  color: "white",
                  border: "none",
                  borderRadius: 2,
                  px: 4,
                  py: 2,
                  fontSize: 2,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bg: "#D63384",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(236, 55, 80, 0.3)",
                  }
                }}
              >
                Register Now
              </Button>
            )}
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
