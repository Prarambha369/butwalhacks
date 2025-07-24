import React, {useState, useEffect} from "react";
import {Box} from "theme-ui";

/**
 * Custom cursor component that creates a glow effect and follows the mouse movement.
 *
 * Provides a branded cursor experience with smooth animations and glow effects
 * that match the HackClub Butwal brand colors.
 */
export default function CustomCursor() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Detect hoverable elements
        const handleMouseOver = (e) => {
            const isHoverableElement =
                e.target.tagName === 'BUTTON' ||
                e.target.tagName === 'A' ||
                e.target.role === 'button' ||
                e.target.style.cursor === 'pointer' ||
                window.getComputedStyle(e.target).cursor === 'pointer';

            setIsHovering(isHoverableElement);
        };

        document.addEventListener('mousemove', updatePosition);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isVisible]);

    if (typeof window === 'undefined') return null;

    return (
        <>
            {/* Outer glow ring */}
            <Box
                sx={{
                    position: 'fixed',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    width: isClicking ? '20px' : isHovering ? '50px' : '30px',
                    height: isClicking ? '20px' : isHovering ? '50px' : '30px',
                    borderRadius: '50%',
                    border: '2px solid',
                    borderColor: isHovering ? 'secondary' : 'primary',
                    transform: 'translate(-50%, -50%)',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease, border-color 0.2s ease',
                    opacity: isVisible ? 0.6 : 0,
                    mixBlendMode: 'difference',
                    '@keyframes pulse': {
                        '0%': {transform: 'translate(-50%, -50%) scale(1)'},
                        '50%': {transform: 'translate(-50%, -50%) scale(1.1)'},
                        '100%': {transform: 'translate(-50%, -50%) scale(1)'},
                    },
                    animation: isHovering ? 'pulse 1s ease-in-out infinite' : 'none',
                }}
            />

            {/* Inner dot */}
            <Box
                sx={{
                    position: 'fixed',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    width: isClicking ? '4px' : '8px',
                    height: isClicking ? '4px' : '8px',
                    borderRadius: '50%',
                    backgroundColor: isHovering ? 'secondary' : 'primary',
                    transform: 'translate(-50%, -50%)',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    boxShadow: (theme) =>
                        `0 0 ${isHovering ? '20px' : '15px'} ${isHovering ? '5px' : '3px'} ${
                            isHovering ? theme.colors.secondary : theme.colors.primary
                        }`,
                    opacity: isVisible ? 1 : 0,
                    transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
                }}
            />

            {/* Trailing particles effect */}
            <Box
                sx={{
                    position: 'fixed',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: (theme) =>
                        `radial-gradient(circle, ${
                            isHovering ? theme.colors.secondary : theme.colors.primary
                        }20 0%, transparent 70%)`,
                    transform: 'translate(-50%, -50%)',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    opacity: isVisible ? 0.3 : 0,
                    transition: 'opacity 0.3s ease, background 0.2s ease',
                    '@keyframes ripple': {
                        '0%': {
                            transform: 'translate(-50%, -50%) scale(0.5)',
                            opacity: 0.6,
                        },
                        '100%': {
                            transform: 'translate(-50%, -50%) scale(1.5)',
                            opacity: 0,
                        },
                    },
                    animation: isClicking ? 'ripple 0.6s ease-out' : 'none',
                }}
            />

            {/* Additional glow for enhanced visibility */}
            <Box
                sx={{
                    position: 'fixed',
                    pointerEvents: 'none',
                    zIndex: 9997,
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: (theme) =>
                        `radial-gradient(circle, ${
                            isHovering ? theme.colors.secondary : theme.colors.primary
                        }10 0%, transparent 60%)`,
                    transform: 'translate(-50%, -50%)',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    opacity: isVisible && isHovering ? 0.2 : 0,
                    transition: 'opacity 0.4s ease, background 0.2s ease',
                }}
            />
        </>
    );
}
