import { JSX } from "react";
import styled from "styled-components";

import AboutMe from "./_components/layout/AboutMe/AboutMe";
import AfterWork from "./_components/layout/AfterWork/AfterWork";
import Intro from "./_components/layout/Intro/Intro";
import Projects from "./_components/layout/Projects/Projects";

export default function Home(): JSX.Element {
  return (
    <Container>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <AfterWork></AfterWork>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--secondary-color);
  min-height: 100vh;
`;
