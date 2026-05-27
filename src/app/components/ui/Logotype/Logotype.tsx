import React, { JSX } from "react";

import {
  CollapsibleTextPart,
  HomepageLink,
  LogotypeWrapper,
  StaticTextPart,
  WordSpacer,
} from "./logotype.styles";
import type { LogotypeProps } from "./logotype.types";

const Logotype = ({ isScrolled }: LogotypeProps): JSX.Element => (
  <LogotypeWrapper>
    <HomepageLink href="/" tabIndex={1} aria-label="Magda Chudzik">
      <StaticTextPart>M</StaticTextPart>
      <CollapsibleTextPart $isScrolled={isScrolled}>agda</CollapsibleTextPart>
      <WordSpacer $isScrolled={isScrolled} />
      <StaticTextPart>Ch</StaticTextPart>
      <CollapsibleTextPart $isScrolled={isScrolled}>udzik</CollapsibleTextPart>
    </HomepageLink>
  </LogotypeWrapper>
);

export default Logotype;
