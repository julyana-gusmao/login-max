import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000; /* adiciona o z-index */

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.lg};
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 1.5rem 1rem;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  button {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    line-height: 1;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LabelUpload = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  max-width: 100%;

  span {
    font-weight: bold;
    font-size: 14px;
  }

  input {
    display: none;
  }

  img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #ccc;
    align-self: center;
  }

  @media (max-width: 768px) {
    span {
      font-size: 13px;
    }

    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;