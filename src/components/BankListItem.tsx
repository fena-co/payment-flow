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

  &:last-child {
    flex-grow: 0;
    flex-basis: 28%;
  }
  @media (max-width: 900px) {
    flex-basis: 100%;
    &:last-child {
      flex-grow: 1;
      flex-basis: 100%;
    }
  }
`;

const BankIcon = styled.img`
  margin-right: var(--space-1);
  height: 30px;
  width: 30px;
  object-fit: contain;
`;

const BankButton = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

interface BankListProps {
  name: string;
  logo: string;
  onClick: () => void;
}
const BankListItem: React.FunctionComponent<BankListProps> = ({
  name,
  logo,
  onClick,
}) => (
  <BankButtonLabel id={name}>
    <BankIcon src={logo} alt="bank icon" />
    {name}
    <BankButton onClick={onClick} id={name} type="radio" name="bank" />
  </BankButtonLabel>
);

export default BankListItem;
