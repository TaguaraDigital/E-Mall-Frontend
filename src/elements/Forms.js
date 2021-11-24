import styled from "styled-components";

const colors = {
  border: "#0075ff",
  error: "#bb2929",
  success: "#1ed12d",
};

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  } */
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  padding: 1rem 1rem 0.5rem 1rem;
  min-height: 2.5rem;
  cursor: pointer;

  color: ${(props) =>
    props.isValid === "false" ? `${colors.error}` : `inherit`};
`;

export const GroupInput = styled.div`
  position: relative;
  padding: 0 1rem;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 0;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  border: 3px solid transparent;

  &:focus {
    border: ${(props) =>
      props.isValid === "false"
        ? `3px solid ${colors.error}`
        : props.isValid === "true"
        ? `3px solid ${colors.success}`
        : `3px solid transparent`};
    outline: none;
  }
`;

export const MsgInfo = styled.p`
  font-size: 12px;
  padding: 0 1rem;
  margin: 0;
  color: ${colors.error};
  opacity: ${(props) => (props.isValid === "false" ? 1 : 0)};
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.isValid === "false" ? `${colors.error}` : `${colors.success}`};
  opacity: ${(props) =>
    props.isValid === "false" || props.isValid === "true" ? 1 : 0};
`;

export const ContenedorTerminos = styled.div`
  @media (min-width: 800px) {
    grid-column: span 2;
  }

  input {
    width: max-content;
    margin-right: 10px;
    display: inline-block;
  }
`;

export const ContenedorCenterButton = styled.div`
  @media (min-width: 800px) {
    grid-column: span 2;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 30%;
  background-color: var(--mainClr);
  color: var(--lightClr);
  cursor: pointer;
  transition: 0.3s ease all;
`;

export const Msg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  opacity: ${(props) => (props.show ? 1 : 0.5)};

  background-color: ${(props) =>
    props.show ? `${colors.success}` : "#f66060"};

  color: var(--lightClr);
  padding: 1rem;
  @media (min-width: 800px) {
    grid-column: span 2;
  }

  b {
    margin-left: 10px;
  }
`;
