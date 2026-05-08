import styled from "styled-components";

export const LogotypeWrapper = styled.span`
  position: relative;
`;

export const HomepageLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: var(--font-size-basic);
  font-family: var(--font-family-basic);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0;
  color: var(--primary-color);
  transition: letter-spacing var(--transition-default);
  white-space: nowrap;

  &::before {
    content: "";
    display: inline-block;
    margin-right: 8px;
    width: 8px;
    height: 22px;
    background-color: var(--primary-color);
    mask-image: url("/images/bracets/arrow-before-small.svg");
    mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-image: url("/images/bracets/arrow-before-small.svg");
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
  }

  &::after {
    content: "";
    display: inline-block;
    margin-left: 8px;
    width: 8px;
    height: 22px;
    background-color: var(--primary-color);
    mask-image: url("/images/bracets/arrow-next-small.svg");
    mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-image: url("/images/bracets/arrow-next-small.svg");
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
  }

  &:hover {
    letter-spacing: 1px;
  }
`;

export const StaticTextPart = styled.span`
  display: inline-block;
  flex: 0 0 auto;
`;

export const CollapsibleTextPart = styled.span<{
  $isScrolled: boolean;
}>`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  flex: 0 0 auto;
  width: ${({ $isScrolled }) => ($isScrolled ? "0" : "5ch")};
  opacity: ${({ $isScrolled }) => ($isScrolled ? 0 : 1)};
  transition:
    width var(--transition-default),
    opacity var(--transition-default);
`;

export const WordSpacer = styled.span<{ $isScrolled: boolean }>`
  display: inline-block;
  flex: 0 0 auto;
  width: ${({ $isScrolled }) => ($isScrolled ? "0" : "0.5ch")};
  transition: width var(--transition-default);
`;
