import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  width: 320px;
  max-width: 90%;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.15);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  & > button {
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  font-size: 16px;
  color: #222;
  margin-bottom: 24px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;
