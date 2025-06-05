import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 203px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem 0.75rem 0.6rem 2.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: #f6f6f6;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.poppins};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    outline: none;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transform: translateY(-50%);
  pointer-events: none;
`;
