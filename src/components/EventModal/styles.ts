import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1.5rem;
  }
  button {
    font-size: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;