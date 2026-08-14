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
      <Toolbar aria-hidden="true" role="presentation" tabIndex={-1}>
        <TrafficLights>
          <Dot color={DotColor.RED} />
          <Dot color={DotColor.YELLOW} />
          <Dot color={DotColor.GREEN} />
        </TrafficLights>
        <AddressBar>
          <LockIcon aria-hidden="true">🔒</LockIcon>
          <AddressText>https://www.example.com</AddressText>
        </AddressBar>
        <MenuButton
          as="div"
          aria-hidden="true"
          role="presentation"
          tabIndex={-1}
        >
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
