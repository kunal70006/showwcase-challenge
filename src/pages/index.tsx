import { useState } from "react";
import Head from "next/head";
import InputField from "../components/Input";
import EnterButton from "../components/Link";
import { Container, Subtitle, SubSubTitle } from "../styles/Styles";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [name, setName] = useState("");

  const setUsername = (text: string) => {
    setName(text);
  };

  return (
    <>
      <Head>
        <title>Showwcase React Challenge</title>
        <meta name="description" content="Showwcase React Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Subtitle>Hi there! Welcome to your education showcase.</Subtitle>
        <SubSubTitle>
          Type your name and click &ldquo;Enter&rdquo; below to begin!.
        </SubSubTitle>
        <InputField
          placeholder="Your name"
          setUsername={setUsername}
          name={name}
        />
        <EnterButton slug={`/${encodeURIComponent(name)}`} />
      </Container>
    </>
  );
};

export default Home;
