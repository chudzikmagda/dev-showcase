import type { FC } from "react";

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
import { DotColor, type BrowserFrameProps } from "./BrowserFrame.types";

const BrowserFrame: FC<BrowserFrameProps> = ({ image, radius = "12px" }) => {
  return (
    <Frame $radius={radius}>
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
      <Content>
        <StyledImg
          src={image.src}
          alt={image.alt ?? ""}
          loading="lazy"
          decoding="async"
        />
      </Content>
    </Frame>
  );
};

export default BrowserFrame;
