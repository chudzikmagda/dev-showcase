"use client";

import { JSX } from "react";
import styled from "styled-components";

import Button from "@/components/ui/Button/Button";
import { ButtonSize, ButtonVersion } from "@/components/ui/Button/button.types";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Container>
        <Content>
          <Code>404</Code>
          <Title>Page not found</Title>
          <Button
            href="/"
            label="Go back home"
            version={ButtonVersion.PRIMARY}
            size={ButtonSize.REGULAR}
            hasArrow={true}
          />
        </Content>
      </Container>
    </>
  );
};

export default NotFoundPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  min-height: 100vh;
  padding: 6rem 1.5rem 4rem;
  text-align: center;
  background: var(--secondary-color);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 42rem;
`;

const Code = styled.h1`
  font-size: clamp(5rem, 12vw, 8rem);
  font-weight: 700;
  color: var(--primary-color);
`;

const Title = styled.h3`
  font-size: clamp(1.75rem, 3vw, 3rem);
  color: var(--primary-text-color);
`;
