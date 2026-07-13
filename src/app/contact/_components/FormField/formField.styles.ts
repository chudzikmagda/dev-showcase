import styled from "styled-components";

import { Breakpoints } from "@/shared/types/breakpoints.types";

export const Wrapper = styled.label`
  position: relative;
  display: block;
  width: 100%;
  padding-top: var(--form-input-padding-top);
`;

export const FloatingLabel = styled.span`
  position: absolute;
  left: 16px;
  top: calc(var(--form-input-padding-top) + (var(--form-input-height) / 2));
  transform: translateY(-50%);
  font-size: 0.95rem;
  color: var(--white);
  pointer-events: none;
  transition:
    transform 0.18s ease,
    top 0.18s ease,
    color 0.18s ease;

  @media (min-width: ${Breakpoints.MOBILE}) {
    top: calc(var(--form-input-padding-top) + (var(--form-input-height) / 2));
  }

  ${Wrapper}:focus-within &,
  ${Wrapper}[data-has-value='true'] & {
    top: 6px;
    transform: translateY(-50%);
    font-size: 0.6875rem;
  }

  ${Wrapper}:focus-within & {
    color: var(--primary-color);
  }
`;

export const Control = styled.input`
  all: unset;
  display: inline-block;
  width: 100%;
  padding: 0 16px;
  height: var(--form-input-height);
  line-height: var(--form-input-height);
  color: var(--white);
  background: var(--card-bg);
  border: 1px solid var(--secondary-color-70);
  border-radius: 50px;
  box-sizing: border-box;
  transition:
    border-color var(--transition-default),
    box-shadow var(--transition-default);

  &::placeholder {
    color: transparent;
  }

  &:focus-visible {
    outline: none;
    border-color: var(--primary-color);
  }

  &[data-variant="textarea"] {
    display: block;
    padding: var(--form-input-padding-top) 16px;
    height: auto;
    border-radius: 25px;
    resize: vertical;
    line-height: normal;
  }
`;
