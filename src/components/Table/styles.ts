import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  max-width: 1370px;
  min-height: 350px;
  background-color: #fff;
  border-radius: 8px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const TableHead = styled.thead`
  width: 100%;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableRow = styled.tr<{ isHeader?: boolean }>`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[50]};

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0.5rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.primary[50]};

    ${({ isHeader }) => isHeader && `
      display: none;
    `}
  }
`;

export const TableHeader = styled.th<{ isLast?: boolean }>`
  flex: ${({ isLast }) => (isLast ? "0 0 60px" : "1")};
  font-family: ${({ theme }) => theme.font.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary[50]};
  padding: 16px;
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DottedLine = styled.hr`
  border-top: 1px dashed ${({ theme }) => theme.colors.primary[50]};
  margin: 0;
  color: ${({ theme }) => theme.colors.primary[50]};
`;

export const TableData = styled.td<{ isLast?: boolean }>`
  position: relative;
  padding: 16px;
  flex: ${({ isLast }) => (isLast ? "0 0 60px" : "1")};
  font-family: ${({ theme }) => theme.font.poppins};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: 768px) {
    flex: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #eee;

    &::before {
      content: attr(data-label);
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      color: ${({ theme }) => theme.colors.primary[50]};
      margin-right: 8px;
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StatusIndicator = styled.span<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ active }) => (active ? "green" : "red")};

  &::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? "green" : "red")};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 36px;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
  border-radius: 4px;
  width: 140px;
  z-index: 10;
`;

export const DropdownItem = styled.button`
  display: block;
  width: 100%;
  padding: 8px 12px;
  text-align: left;
  background: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background-color: #f2f2f2;
  }
`;
