import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import InputField from "../components/Input";
import type { NextPage } from "next";
import EnterButton from "../components/Button";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ghostwhite;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: large;
`;

const Subtitle = styled.p`
  margin-bottom: 4rem;
`;

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
        <p>Type your name and click &ldquo;Enter&rdquo; below to begin!.</p>
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
