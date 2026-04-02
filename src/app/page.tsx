"use client";
import styled from "styled-components";
import Intro from "./components/layout/Intro/Intro";

const Container = styled.div`
  background-color: var(--color-accent-secondary);
  height: 100vh;
`;
export default function Home() {
  return (
    <Container>
      <Intro></Intro>
    </Container>
  );
}
