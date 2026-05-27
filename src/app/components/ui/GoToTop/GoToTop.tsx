"use client";

import { GoTopButton } from "./goToTop.styles";

const GoToTop = (): JSX.Element => {
  const handleGoToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <GoTopButton type="button" onClick={handleGoToTop}>
      Go to the top
    </GoTopButton>
  );
};

export default GoToTop;
