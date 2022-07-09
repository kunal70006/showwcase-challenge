import { ChangeEvent, useState } from "react";
import Head from "next/head";
import InputField from "../components/Input";
import EnterButton from "../components/Link";
import { Container, Title, Heading } from "../styles/Styles";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [name, setName] = useState<string>("");

  const setUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Showwcase React Challenge</title>
        <meta name="description" content="Showwcase React Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title style={{ marginBottom: "1.5em" }}>
          Hi there! Welcome to your education showcase.
        </Title>
        <Heading style={{ marginBottom: "1em" }}>
          Type your name and click &ldquo;Enter&rdquo; below to begin!.
        </Heading>
        <InputField
          placeholder="Your name"
          handlChange={setUsername}
          value={name}
          style={{ marginBottom: "1em" }}
        />
        <EnterButton slug={`/${encodeURIComponent(name)}`} />
      </Container>
    </>
  );
};

export default Home;
