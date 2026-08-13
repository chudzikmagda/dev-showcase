import type { FC } from "react";

import type { Image } from "@/shared/types/image.types";

import {
  AddressBar,
  AddressText,
  Content,
  Dot,
  Frame,
  LockIcon,
  MenuButton,
  StyledImg,
  Toolbar,
  TrafficLights,
} from "./BrowserFrame.styles";
import { DotColor } from "./BrowserFrame.types";

const BrowserFrame: FC<{ image: Image }> = ({ image }) => {
  return (
    <Frame>
      <Toolbar>
        <TrafficLights aria-label="Browser controls">
          <Dot color={DotColor.RED} />
          <Dot color={DotColor.YELLOW} />
          <Dot color={DotColor.GREEN} />
        </TrafficLights>
        <AddressBar aria-label="Address bar">
          <LockIcon aria-hidden="true">🔒</LockIcon>
          <AddressText>https://www.example.com</AddressText>
        </AddressBar>
        <MenuButton aria-label="Menu button">
          <span />
          <span />
          <span />
        </MenuButton>
      </Toolbar>
      <Content>{<StyledImg src={image.src} alt={image.alt} />}</Content>
    </Frame>
  );
};

export default BrowserFrame;
