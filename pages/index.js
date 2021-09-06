import Head from "next/head";
import { Container, Divider } from "@chakra-ui/react";

import Stack from "components/pages/index/Stack";
import Timeline from "components/pages/index/Timeline";
import Profile from "components/pages/index/Profile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joshua Byrd / Home</title>
        <meta
          name="description"
          content="Joshua Byrd - Software Developer, etc."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:url" content="https://phocks.org/" />
        <meta
          property="og:title"
          content="Joshua Byrd - Software Developer, etc."
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]}>
          <Profile />
          <Divider my={10} />
          <Stack />
          <Divider my={10} />
          <Timeline />
        </Container>
      </main>
    </div>
  );
}
