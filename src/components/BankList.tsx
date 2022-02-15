import React from 'react';
import styled from 'styled-components';

const BankButtonLabel = styled.label`
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  padding: var(--space-2);
  display: flex;
  align-items: center;
  background-color: #f4f7f9;
  cursor: pointer;
  flex-basis: 25%;
  flex-grow: 1;
  @media (max-width: 900px) {
    flex-basis: 100%;
  }
`;

const BankIcon = styled.img`
  margin-right: var(--space-1);
  height: 30px;
  width: 30px;
`;

const BankButton = styled.input`
  visibility: hidden;
  width: 0px;
  height: 0px;
`;

interface BankListProps {
  label: string;
  logo: string;
  onClick: () => void;
}
const BankList: React.FunctionComponent<BankListProps> = ({
  label,
  logo,
  onClick,
}) => (
  <BankButtonLabel id={label}>
    <BankIcon src={logo} alt="bank icon" />
    {label}
    <BankButton onClick={onClick} id={label} type="radio" name="bank" />
  </BankButtonLabel>
);

export default BankList;
