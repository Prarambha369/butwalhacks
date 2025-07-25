import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Container, Heading, Text, Button, Flex } from "theme-ui";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;

    if (path.includes("/form/form.html") || path === "/form.html") {
      router.replace("/form");
      return;
    }

    if (path.endsWith(".html")) {
      const newPath = path.replace(".html", "");
      router.replace(newPath);
      return;
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Page Not Found – HackClub Butwal</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
      </Head>

      <Container>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            minHeight: "80vh",
            py: 5,
          }}
        >
          <Box sx={{ position: "relative", width: 150, height: 150, mb: 4 }}>
            <Image
              src="/assets/logo/rlogo.svg"
              alt="HackClub Butwal Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>

          <Heading
            as="h1"
            sx={{
              fontSize: [5, 6],
              mb: 3,
              background: "linear-gradient(90deg, primary, secondary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404 - Page Not Found
          </Heading>

          <Text sx={{ fontSize: [2, 3], mb: 4, maxWidth: "600px" }}>
            Oops! The page you're looking for has gone missing in the code.
            Maybe it's off attending a hackathon or debugging itself.
          </Text>

          <Flex sx={{ gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
            <Button as={Link} href="/" variant="primary">
              Return Home
            </Button>
            <Button as={Link} href="/contact" variant="outline">
              Contact Us
            </Button>
          </Flex>

          <Box
            sx={{
              mt: 5,
              p: 3,
              borderRadius: "default",
              bg: "muted",
              maxWidth: "600px",
            }}
          >
            <Heading as="h2" sx={{ fontSize: 2, mb: 2 }}>
              Looking for something specific?
            </Heading>
            <Text sx={{ fontSize: 1 }}>
              Try checking out our{" "}
              <Link href="/workshops" sx={{ color: "primary" }}>
                Workshops
              </Link>
              ,{" "}
              <Link href="/community" sx={{ color: "primary" }}>
                Community
              </Link>
              , or{" "}
              <Link href="/gallery" sx={{ color: "primary" }}>
                Gallery
              </Link>{" "}
              pages. Or{" "}
              <Link href="/contact" sx={{ color: "primary" }}>
                contact us
              </Link>{" "}
              if you need help finding something.
            </Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
