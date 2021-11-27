import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const DashboardContainer = styled.section`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const DashboardCard = styled.article`
  background-color: lightblue;
  width: 100%;
  height: 400px;
`;

export const DashboardLink = styled(LinkR)`
  cursor: pointer;

  img {
    display: block;
    max-width: 100%;
  }
`;
