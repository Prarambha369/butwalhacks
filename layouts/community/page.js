"use client";
import { useEffect, useState } from "react";
import { Box, Grid, Card, Text, Heading, Image, Link, Flex } from "theme-ui";
import communityData from "../../lib/community.json";

export default function CommunityPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use static data instead of API call
    setMembers(communityData.records || []);
    setLoading(false);
  }, []);

  return (
    <Box sx={{ px: 4, py: 5, bg: "background", color: "text" }}>
      <Heading as="h1" sx={{ mb: 4, fontSize: [4, 5], textAlign: "center" }}>
        Our Community
      </Heading>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Grid columns={[1, 2, 3]} gap={4}>
          {members.map((m) => {
            const { id, fields } = m;
            return (
              <Card key={id} sx={{ p: 4, bg: "white", borderRadius: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "1px solid #E9ECEF" }}>
                <Box sx={{ textAlign: "center", mb: 3 }}>
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      mx: "auto",
                      mb: 3,
                      overflow: "hidden",
                      border: "3px solid #EC3750",
                      boxShadow: "0 8px 25px rgba(236, 55, 80, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 4,
                      bg: "#EC3750",
                      color: "white"
                    }}
                  >
                    👨‍💻
                  </Box>
                  <Heading as="h3" sx={{ mb: 1, fontSize: [3, 4], color: "#2C3E50" }}>
                    {fields.Name}
                  </Heading>
                  <Text sx={{ mb: 2, color: "#EC3750", fontWeight: 600 }}>{fields.Role}</Text>
                  <Text sx={{ mb: 3, color: "#7F8C8D", lineHeight: 1.6, fontSize: [2, 3] }}>
                    {fields.Bio}
                  </Text>
                  <Flex sx={{ justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                    {fields.Skills && fields.Skills.map((skill, index) => (
                      <Text
                        key={index}
                        sx={{
                          bg: "#F8F9FA",
                          color: "#2C3E50",
                          px: 2,
                          py: 1,
                          borderRadius: 20,
                          fontSize: 1,
                          fontWeight: 600,
                          border: "1px solid #E9ECEF"
                        }}
                      >
                        {skill}
                      </Text>
                    ))}
                  </Flex>
                </Box>
              </Card>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}
