import React from 'react';
import styled from 'styled-components';

const BankButtonLabel = styled.label`
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  padding: var(--space-2);
  display: flex;
  align-items: center;
  /* min-width: 10rem; */
  background-color: #f4f7f9;
  cursor: pointer;
  /* margin-right: 0.3rem;
  margin-bottom: 0.5rem; */
  /* flex-basis: ${(props) => (props.hidden ? `100%` : `10%`)}; */
  flex-basis: 100%;
  flex-grow: 1;
  /* flex-shrink: 0; */
  /* display: ${(props) => (props.id && props.hidden ? `none` : `initial`)}; */
  /* &:nth-child(4n) {
    margin-right: 0;
  } */
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

const ChangeButton = styled.button`
  font-family: inherit;
  font-weight: bold;
  border: none;
  background-color: initial;
  cursor: pointer;
`;

interface BankListProps {
  label: string;
  logo: string;
  onClick: () => void;
}
const SingleBank: React.FunctionComponent<BankListProps> = ({
  label,
  logo,
  onClick,
}) => (
  <BankButtonLabel>
    <BankIcon src={logo} alt="bank icon" />
    {label}
    <BankButton type="radio" name="bank" />
    <ChangeButton onClick={onClick}>Change</ChangeButton>
  </BankButtonLabel>
);

export default SingleBank;
