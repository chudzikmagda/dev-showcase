import styled from "styled-components";

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  background:
    url("/images/bg-section-welcome.svg") center top,
    var(--secondary-color);
  background-size: cover;
`;

export const TagsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 8rem;
`;

export const Title = styled.h2`
  margin: 2rem 0;
  font-size: clamp(1.25rem, 1.5rem + 2vw, calc(3rem + 2vmin));
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  color: var(--primary-text-color);
`;

export const ShowcaseContainer = styled.div`
  padding: 2.5rem 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectLabel = styled.div`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--grey-30);
`;

export const ProjectImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
`;

export const ProjectImage = styled.img`
  border: 1px solid var(--secondary-color-60);
  border-radius: 8px;
  width: 100%;
  height: auto;
`;

export const ImplementationDate = styled.div`
  margin: 1.5rem 0 0.5rem 0;
  color: var(--grey-40);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const ProjectDescription = styled.div`
  margin-bottom: 2.5rem;
  color: var(--primary-text-color);
  font-size: 1.1rem;
  max-width: 700px;
  text-align: center;
`;
