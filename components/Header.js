/** @jsxImportSource theme-ui */
"use client"

import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { Box, Container, Flex } from "theme-ui"
import theme from "../lib/theme"
import Icon from "./icon"
import Link from "next/link"
import { Logo } from "./bin/Footer"

const rgbaBgColor = (props, opacity) => `rgba(${props.bgColor[0]},${props.bgColor[1]},${props.bgColor[2]},${opacity})`

const fixed = (props) =>
  (props.scrolled || props.toggled || props.fixed) &&
  css`
    background-color: ${rgbaBgColor(props, 0.98)};
    border-bottom: 1px solid rgba(48, 48, 48, 0.125);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      background-color: ${props.transparent ? "transparent" : rgbaBgColor(props, 0.95)};
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      backdrop-filter: saturate(180%) blur(20px);
    }
  `

const Root = styled(Box, {
    shouldForwardProp: (prop) => !["bgColor", "scrolled", "toggled", "transparent"].includes(prop),
})`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
  background-color: ${(props) => rgbaBgColor(props, 0.95)};
  border-bottom: 1px solid rgba(48, 48, 48, 0.1);
  ${fixed};
  @media print {
    display: none;
  }
`

export const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  padding: 12px 16px;
`

const hoverColor = (name) =>
  ({
    white: "smoke",
    smoke: "muted",
    muted: "slate",
    slate: "black",
    black: "slate",
    primary: "error",
  })[name] || "black"

const slide = keyframes({
  from: { transform: "translateY(-25%)", opacity: 0 },
  to: { transform: "translateY(0)", opacity: 1 },
})

const layout = (props) =>
  props.isMobile
    ? css`
        display: ${props.toggled ? "flex" : "none"};
        flex-direction: column;
        overflow-y: auto;
        text-align: left;
        height: 100vh;
        background-color: #f8f9fa;
        @media (prefers-reduced-motion: no-preference) {
          animation: ${slide} 0.25s ease-in;
        }
        a {
          color: #222 !important;
          margin: 0 auto;
          height: 48px;
          font-weight: 600;
          font-size: 1rem;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          &:not(:last-child) {
            border-bottom: 1px solid #e9ecef;
          }
          &:hover {
            background-color: #ececec;
            color: #EC3750 !important;
          }
          @media screen and (max-width: 22em) {
            max-width: 16rem;
          }
        }
      `
    : css`
        @media (min-width: 56em) {
          display: flex;
          justify-content: flex-end;
        }
        a {
          font-size: 1rem;
          font-weight: 500;
          color: #222;
          &:hover {
            color: #EC3750;
          }
        }
      `

const NavBar = styled(Box, {
  shouldForwardProp: (prop) => !["isMobile", "toggled"].includes(prop),
})`
  display: none;
  ${layout};
  a {
    margin-left: ${theme.space[2]}px;
    padding: ${theme.space[3]}px ${theme.space[2]}px;
    text-decoration: none;
    transition: color 0.2s ease;
    @media (min-width: 56em) {
      color: ${theme.colors.black};
    }
  }
`

const Navigation = (props) => (
  <NavBar role="navigation" {...props}>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/community">Community</Link>
    <Link href="/workshops">Workshops</Link>
    <Link href="/gallery">Gallery</Link>
    <Link href="/contact">Contact</Link>
  </NavBar>
)

const ToggleContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  min-width: 64px;
  min-height: 44px;
  cursor: pointer;
  user-select: none;
  margin-left: auto;
  color: ${theme.colors.black};
  @media (min-width: 56em) {
    display: none;
  }
`

function useHeaderState(unfixed) {
  const [scrolled, setScrolled] = useState(false)
  const [toggled, setToggled] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!unfixed) {
        const onScroll = () => setScrolled(window.scrollY >= 16)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
      }
    }
  }, [unfixed])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mobileQuery = window.matchMedia("(max-width: 56em)")
      const handleChange = () => {
        setMobile(mobileQuery.matches)
        if (!mobileQuery.matches) {
          setToggled(false)
        }
      }
      handleChange()
      mobileQuery.addEventListener("change", handleChange)
      return () => mobileQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return { scrolled, toggled, setToggled, mobile }
}

function LogoLink() {
  return (
    <Link
      href="/"
      className="logo-link"
      style={{
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "1.1rem",
        color: "#222",
        textDecoration: "none",
        transition: "color 0.2s ease"
      }}
    >
      <Logo style={{ height: 28, marginRight: 10 }} />
      Hack Club Butwal
    </Link>
  )
}

function NavigationWrapper({ isMobile, toggled, mobile }) {
  return <Navigation as="nav" aria-hidden={isMobile ? !toggled : false} isMobile={isMobile} toggled={toggled} />
}

function HeaderNavigation({ mobile }) {
  return <NavigationWrapper isMobile={false} mobile={mobile} />
}

function HeaderToggle({ onToggle, toggled }) {
  return (
    <ToggleContainer onClick={onToggle}>
      <Icon glyph={toggled ? "view-close" : "menu"} />
    </ToggleContainer>
  )
}

function Header({ unfixed, fixed, ...props }) {
  const { scrolled, toggled, setToggled, mobile } = useHeaderState(unfixed)
  const handleToggleMenu = () => setToggled((t) => !t)

  return (
    <Root {...props} fixed={fixed} scrolled={scrolled} toggled={toggled} bgColor={[255, 255, 255]} as="header">
      <Content>
        <LogoLink />
        <HeaderNavigation mobile={mobile} />
        <HeaderToggle onToggle={handleToggleMenu} toggled={toggled} />
      </Content>
      <NavigationWrapper isMobile={true} toggled={toggled} mobile={mobile} />
    </Root>
  )
}

Header.defaultProps = {
  color: "black",
}

export default Header
