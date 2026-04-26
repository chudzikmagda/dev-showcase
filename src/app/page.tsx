"use client";
import styled from "styled-components";
import Intro from "./components/layout/Intro/Intro";
import AboutMe from "./components/layout/AboutMe/AboutMe";

const Container = styled.div`
  background-color: var(--secondary-color);
  min-height: 100vh;
`;
export default function Home() {
  return (
    <Container>
      <Intro></Intro>
      <AboutMe></AboutMe>
    </Container>
  );
}
