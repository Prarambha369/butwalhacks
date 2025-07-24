import {Box, Text, keyframes} from "theme-ui";
import React, {useEffect} from "react";
import logo from "../../public/bin/logo/rlogo.svg";

/** @jsxImportSource theme-ui */

const popUp = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

const slideIn = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

/**
 * Displays a full-screen animated loading screen with a logo and text, then triggers a callback after the animation completes.
 *
 * @param {Object} props
 * @param {Function} props.onAnimationEnd - Callback invoked after the loading animation finishes (approximately 3 seconds).
 * @returns {JSX.Element} The loading screen component.
 */
export default function Loading({onAnimationEnd}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationEnd(); // End animation after 3 seconds
        }, 3000);
        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "background",
                animation: `${fadeOut} 1s ease-in-out 2s forwards`,
            }}
        >
            <img
                src={logo}
                alt="HackClub Butwal Logo"
                style={{
                    animation: `${popUp} 1s ease-in-out`,
                    width: "100px",
                    height: "100px",
                }}
            />
            <Text
                sx={{
                    mt: 3,
                    animation: `${slideIn} 1s ease-in-out 0.5s`,
                    color: "text",
                    fontSize: [4, 5, 6],
                }}
            >
                HackClub Butwal
            </Text>
        </Box>
    );
}
