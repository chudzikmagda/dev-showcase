import styled from "styled-components";
import Intro from "./components/layout/Intro/Intro";
import AboutMe from "./components/layout/AboutMe/AboutMe";
import AfterWork from "./components/layout/AfterWork/AfterWork";
import Projects from "./components/layout/Projects/Projects";

export default function Home() {
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
