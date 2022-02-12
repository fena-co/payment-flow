import React from 'react';
import styled from 'styled-components';
import { LabelLoweCase } from './Typography';
import starling from '../assets/icons/starling.svg';
import nationwide from '../assets/icons/nationwide.svg';
import santander from '../assets/icons/santander.svg';
import monzo from '../assets/icons/monzo.svg';
import barklays from '../assets/icons/barklays.svg';
import tescoBank from '../assets/icons/tescoBank.svg';
import revoult from '../assets/icons/revoult.svg';
import lloyds from '../assets/icons/lloyds.svg';
import natwest from '../assets/icons/natwest.svg';
import tsb from '../assets/icons/tsb.svg';
import halifax from '../assets/icons/halifax.svg';
import hsbc from '../assets/icons/hsbc.svg';

const CardWrapper = styled.section``;

const Search = styled.input`
  width: 100%;
  padding: var(--space-2);
  background-color: #f4f7f9;
  border: 1px solid #dbe3eb;
  box-shadow: 0px 9px 20px rgba(129, 129, 165, 0.05);
  border-radius: 5px;
  font-family: inherit;
  font-size: 16px;
  color: var(--light-text);
`;

const Banks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: var(--space-2);
`;

const BankButtonLabel = styled.label`
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  padding: var(--space-2);
  display: flex;
  align-items: center;
  min-width: 9rem;
  background-color: #f4f7f9;
  cursor: pointer;
  margin-right: 0.3rem;
  margin-bottom: 0.5rem;
  /* &:nth-child(4n) {
    margin-right: 0;
  } */
`;

const BankIcon = styled.img`
  margin-right: var(--space-1);
`;

const BankButton = styled.input`
  visibility: hidden;
  width: 0px;
  height: 0px;
`;

const BankSelect: React.FunctionComponent = () => {
  const banks = [
    { logo: starling, label: `Starling` },
    { logo: nationwide, label: `Nationwide` },
    { logo: santander, label: `Santander` },
    { logo: monzo, label: `Monzo` },
    { logo: barklays, label: `Barklays` },
    { logo: tescoBank, label: `Tesco bank` },
    { logo: revoult, label: `Revoult` },
    { logo: lloyds, label: `Lloyds` },
    { logo: natwest, label: `Natwest` },
    { logo: tsb, label: `TSB` },
    { logo: halifax, label: `Halifax` },
    { logo: hsbc, label: `HSBC` },
  ];
  return (
    <CardWrapper>
      <LabelLoweCase>Pay with online banking</LabelLoweCase>
      <form>
        <Banks>
          <Search type="text" placeholder="Search all banks" />
          {banks.map((bank) => (
            <BankButtonLabel>
              <BankIcon src={bank.logo} alt="bank icon" />
              {bank.label}
              <BankButton type="radio" name="bank" />
            </BankButtonLabel>
          ))}
        </Banks>
      </form>
    </CardWrapper>
  );
};

export default BankSelect;
