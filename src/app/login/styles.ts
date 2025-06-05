import styled from "styled-components";
import Image from "next/image";

export const Main = styled.main`
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled.div`
  width: 756px;
  height: 498px;
  display: flex;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const LeftContent = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: start;
  padding: 35px;
`;

export const RightContent = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
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
`;

export const Subtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 4px;
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
