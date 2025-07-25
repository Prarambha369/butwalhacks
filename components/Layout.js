import React from "react";
import { Container } from "theme-ui";
import Footer from "./bin/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Container sx={{ py: 4 }}>{children}</Container>
      <Footer />
    </>
  );
}
