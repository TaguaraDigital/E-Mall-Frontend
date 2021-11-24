import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  min-height: 100vh;

  background-color: ${(props) => props.bgClr};

  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutContent = styled.div`
  z-index: 30;
  /* position: absolute; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutTitle = styled.h1`
  color: var(--saintBlue);
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const AboutText = styled.p`
  color: var(--saintBlue);
  max-width: 800px;
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    max-width: 350px;
    font-size: 1.2rem;
  }
`;
