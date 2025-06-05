import styled from "styled-components";
import Image from "next/image";

export const Main = styled.main`
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

export const Container = styled.div`
  width: 756px;
  height: 498px;
  display: flex;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    border-radius: 16px;
  }
`;

export const Section = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: start;
  padding: 35px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 24px;
    gap: 16px;
  }
`;

export const RightContent = styled.div`
  width: 50%;
  height: 100%;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 26px;
  font-family: ${({ theme }) => theme.font.roboto};

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const IllustrationWrapper = styled.div`
  background-color: #cc6237;
  width: 355.5px;
  height: 478px;
  border-radius: 20px;
  position: relative;
  top: 10px;
  right: -12px;
  z-index: 1;
`;

export const Illustration = styled(Image)`
  position: absolute;
  height: 100%;
  left: 150px;
  top: 80px;
  transform: translateX(-50%);
  z-index: 2;
  object-fit: contain;
`;
