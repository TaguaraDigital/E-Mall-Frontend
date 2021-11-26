import styled from "styled-components";

export const PayMethodContainer = styled.section`
  background-color: #f3f6fa;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const PayMethodSummary = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  div {
    span {
      width: 100%;
      margin-right: 1rem;
      text-align: end;
    }

    .first-column {
      text-align: start;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;

    &:last-child,
    &:first-child {
      font-weight: bold;
    }
  }
`;

export const PayMethodButtons = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  .radio-button {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 30px;

    input {
      width: 20px;
      height: 20px;
      margin-right: 1rem;
      box-shadow: none;
    }
  }
`;

export const PayButton = styled.button`
  margin-right: 2rem;
  background-color: ${(props) => (props.bgClr ? props.bgClr : "yellow")};
`;
