import styled from "styled-components";

export const SocialMediaMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: clamp(300px, 50%, 40%);
`;

export const SocialMediaLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin: 0;
  transition: all 0.4s ease;
  opacity: 0.4;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 4px;
    border-radius: 2px;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  height: 32px;
  width: 32px;
`;
