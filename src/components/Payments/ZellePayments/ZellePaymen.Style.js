import styled from "styled-components";

export const ZelleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const FormField = styled.div`
  width: 80%;
  position: relative;
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;

  label {
    font-size: 18px;
    display: block;
    font-weight: ;
  }

  input,
  select {
    display: block;
    height: 40px;
    width: 100%;
    margin: 0;
    border: none;
    padding: 10px;
    font-size: 18px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
  }
`;

export const RowBottons = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;

  button {
    margin-top: 1rem;
    background: var(--saintGreen);
    cursor: pointer;
    transition: 0.2s linear;

    &:last-child {
      background: var(--ctaClr);
    }

    &:hover {
      transform: scale(0.95);
    }
  }
`;
