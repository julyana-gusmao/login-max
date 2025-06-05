import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.font.roboto};
  color: ${({ theme }) => theme.colors.primary};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 299px;
  padding: 10px 20px;
  border: none;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    display: block;
  }
`;

export const DatePickerInput = styled.input`
  width: 299px;
  padding: 10px 20px;
  border: none;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  font-family: ${({ theme }) => theme.font.roboto};
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;