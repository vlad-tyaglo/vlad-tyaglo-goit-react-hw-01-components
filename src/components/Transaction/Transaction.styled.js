import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 48px;
  padding: 0;
  text-align: center;
  border: 1px solid #9faab6;
  width: 700px;
  color: #9faab6;
  background-color: white;
  border-radius: 10px;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  font-size: 24px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #00CED1;
  color: #ffffff;
`;

export const ColumnTitle = styled.th`
  height: 50px;
`;

export const TableCell = styled.tr`
  color: black;
  font-weight: 400;
  font-size: 24px;
  background-color: #B0C4DE;
  &:nth-child(odd) {
    background-color: white;
  }
`;
