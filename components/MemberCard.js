import React from "react";
import {Card, Heading, Text, Flex, Box, Link} from "theme-ui";
import Image from "next/image";
import Icon from "@hackclub/icons";

export default function MemberCard({member}) {
    const {name, role, bio, avatar, socials = {}} = member;

    return (
        <Card
            sx={{
                p: 0,
                overflow: "hidden",
                borderRadius: "default",
                boxShadow: "card",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "elevated",
                    "& .member-image": {
                        transform: "scale(1.05)",
                    },
                },
            }}
        >
            <Box sx={{position: "relative", height: 250, overflow: "hidden"}}>
                <Image
                    src={avatar || "/images/logo/red_logo/rlogo.svg"}
                    alt={name}
                    fill
                    style={{
                        objectFit: "cover",
                        transition: "transform 0.5s ease-in-out",
                    }}
                    className="member-image"
                />
            </Box>

            <Box sx={{p: 3}}>
                <Heading as="h3" sx={{mb: 1, fontSize: 3}}>
                    {name}
                </Heading>

                <Text sx={{mb: 2, color: "primary", fontWeight: "bold"}}>{role}</Text>

                <Text sx={{mb: 3, fontSize: 1}}>{bio}</Text>

                <Flex sx={{justifyContent: "flex-start", gap: 3}}>
                    {socials.github && (
                        <Link
                            href={socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: "text",
                                "&:hover": {color: "primary"},
                                transition: "color 0.2s ease-in-out",
                            }}
                            aria-label={`${name}'s GitHub profile`}
                        >
                            <Icon glyph="github" size={24}/>
                        </Link>
                    )}

                    {socials.twitter && (
                        <Link
                            href={socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: "text",
                                "&:hover": {color: "primary"},
                                transition: "color 0.2s ease-in-out",
                            }}
                            aria-label={`${name}'s Twitter profile`}
                        >
                            <Icon glyph="twitter" size={24}/>
                        </Link>
                    )}

                    {socials.linkedin && (
                        <Link
                            href={socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: "text",
                                "&:hover": {color: "primary"},
                                transition: "color 0.2s ease-in-out",
                            }}
                            aria-label={`${name}'s LinkedIn profile`}
                        >
                            <Icon glyph="linkedin" size={24}/>
                        </Link>
                    )}
                </Flex>
            </Box>
        </Card>
    );
}
