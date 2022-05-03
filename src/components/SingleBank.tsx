import React from 'react';
import styled from 'styled-components';
import OvalButton from './OvalButton';

const BankButtonLabel = styled.label`
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  padding: var(--space-2);
  display: flex;
  justify-content: space-between;
  background-color: #f4f7f9;
  cursor: pointer;
  flex-basis: 100%;
  flex-grow: 1;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
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
const SingleBank: React.FunctionComponent<BankListProps> = ({
  name,
  logo,
  onClick,
}) => (
  <BankButtonLabel>
    <Left>
      <BankIcon src={logo} alt="bank icon" />
      {name}
    </Left>

    <BankButton type="radio" name="bank" />
    <OvalButton onClick={onClick}>Change</OvalButton>
  </BankButtonLabel>
);

export default SingleBank;
