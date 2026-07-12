import styled, { keyframes } from "styled-components";

import { ToastType } from "./toastContainer.types";

export const slideDown = keyframes`
  from { transform: translateY(-120%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Container = styled.div`
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: calc(100% - 32px);
  max-width: 520px;
  pointer-events: none;
`;

export const ToastBox = styled.div<{ type: ToastType }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: auto;
  padding: 16px;
  border-radius: 8px;
  color: var(--primary-text-color);
  animation: ${slideDown} 320ms ease-out;
  background: ${(props) =>
    props.type === ToastType.Error
      ? "var(--error-color)"
      : "var(--success-color)"};
`;

export const Message = styled.div`
  flex: 1;
  font-size: 16px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  padding: 6px;
`;
