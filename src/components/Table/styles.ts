import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 1370px;
  min-height: 350px;
  background-color: #fff;
  border-radius: 8px;
`;

export const TableHead = styled.thead`
  display: block;
  width: 100%;
`;

export const TableRow = styled.tr`
  display: flex;
  width: 100%;
`;

export const TableHeader = styled.th<{ isLast?: boolean }>`
  flex: ${({ isLast }) => (isLast ? "0 0 60px" : "1")};
  font-family: ${({ theme }) => theme.font.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary[50]};
  padding: 16px;
  text-align: left;
`;

export const DottedLine = styled.hr`
  border-top: 1px dashed ${({ theme }) => theme.colors.primary[50]};
  margin: 0;
  color: ${({ theme }) => theme.colors.primary[50]};
`;

export const TableBody = styled.tbody`
  display: block;
  width: 100%;
`;

export const TableData = styled.td<{ isLast?: boolean }>`
  position: relative;
  padding: 16px;
  flex: ${({ isLast }) => (isLast ? "0 0 60px" : "1")};
  font-family: ${({ theme }) => theme.font.poppins};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
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
