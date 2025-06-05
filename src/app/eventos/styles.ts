import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: #fff;
  border: 1px solid rgba(9, 66, 143, 0.17);
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: 1.6rem;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    align-items: stretch;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const HeaderWelcome = styled.h2`
  font-family: ${({ theme }) => theme.font.roboto};
  font-weight: 400;
  font-size: 1.25rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary[90]};
  font-family: ${({ theme }) => theme.font.roboto};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; 
  display: flex;
  justify-content: center;
  max-width: 1370px;
`;


export const ControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    .left,
    .right {
      width: 100%;
      justify-content: center;
    }

    .right {
      gap: 0.75rem;
      flex-wrap: wrap;
    }
  }
`;
