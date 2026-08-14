import styled from "styled-components";

import { DotColor } from "./BrowserFrame.types";

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  border: 1px solid var(--secondary-color-70);
  border-radius: 12px;
  overflow: hidden;
`;

export const Toolbar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  min-height: 52px;
  padding: 0.65rem 1rem;
`;

export const TrafficLights = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Dot = styled.span<{ color: DotColor }>`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: ${({ color }) => {
    switch (color) {
      case DotColor.RED:
        return "#ff5f57";
      case DotColor.YELLOW:
        return "#ffbd2e";
      case DotColor.GREEN:
        return "#28c840";
      default:
        return "#fff";
    }
  }};
`;

export const AddressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  min-height: 1.5rem;
  border-radius: 999px;
  background: rgba(134, 150, 185, 0.1);
  color: rgba(227, 233, 247, 0.3);
  font-size: 0.72rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LockIcon = styled.span`
  font-size: 0.7rem;
  opacity: 0.8;
`;

export const AddressText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MenuButton = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  width: 1.1rem;
  height: 1.1rem;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 1px;
    border-radius: 999px;
    background: rgba(226, 232, 244, 0.4);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 0;
`;

export const StyledImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
