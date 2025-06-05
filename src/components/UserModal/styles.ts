import styled from "styled-components";

export const LabelUpload = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  span {
    font-weight: bold;
  }

  input {
    display: none;
  }

  img {
    max-width: 100px;
    border-radius: 8px;
    object-fit: cover;
    border: 1px solid #ccc;
  }
`;