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
// import lloyds from '../assets/icons/lloyds.svg';
// import natwest from '../assets/icons/natwest.svg';
// import tsb from '../assets/icons/tsb.svg';
// import halifax from '../assets/icons/halifax.svg';
// import hsbc from '../assets/icons/nationwide.svg';

const CardWrapper = styled.section``;

const Search = styled.input`
  width: 100%;
`;

const Banks = styled.div`
  display: flex;
`;

const BankButtonLabel = styled.label`
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  padding: var(--space-2);
  display: flex;
  align-items: center;
  min-width: 10rem;
  background-color: #f4f7f9;
  cursor: pointer;
`;

const BankIcon = styled.img`
  margin-right: var(--space-1);
`;

const BankButton = styled.input`
  visibility: hidden;
`;

const BankSelect: React.FunctionComponent = () => (
  <CardWrapper>
    <LabelLoweCase>Pay with online banking</LabelLoweCase>
    <form>
      <Search type="text" placeholder="Select all banks" />
      <Banks>
        <BankButtonLabel>
          <BankIcon src={starling} alt="bank icon" />
          Starling
          <BankButton type="radio" name="bank" />
        </BankButtonLabel>
        <BankButtonLabel>
          <BankIcon src={nationwide} alt="bank icon" />
          Nationwide
          <BankButton type="radio" name="bank" />
        </BankButtonLabel>
        <BankButtonLabel>
          <BankIcon src={santander} alt="bank icon" />
          Nationwide
          <BankButton type="radio" name="bank" />
        </BankButtonLabel>
        <BankButtonLabel>
          <BankIcon src={monzo} alt="bank icon" />
          Nationwide
          <BankButton type="radio" name="bank" />
        </BankButtonLabel>
        <BankButtonLabel>
          <BankIcon src={barklays} alt="bank icon" />
          Nationwide
          <BankButton type="radio" name="bank" />
        </BankButtonLabel>
        <BankButtonLabel>
          <BankIcon src={tescoBank} alt="bank icon" />
          Nationwide
          <BankButton type="radio" name="bank" />
        </BankButtonLabel>
        <BankButtonLabel>
          <BankIcon src={revoult} alt="bank icon" />
          Nationwide
          <BankButton type="radio" name="bank" />
        </BankButtonLabel>
        <BankButtonLabel>
          <BankIcon src={nationwide} alt="bank icon" />
          Nationwide
          <BankButton type="radio" name="bank" />
        </BankButtonLabel>
        <BankButtonLabel>
          <BankIcon src={nationwide} alt="bank icon" />
          Nationwide
          <BankButton type="radio" name="bank" />
        </BankButtonLabel>
        <BankButtonLabel>
          <BankIcon src={nationwide} alt="bank icon" />
          Nationwide
          <BankButton type="radio" name="bank" />
        </BankButtonLabel>
        <BankButtonLabel>
          <BankIcon src={nationwide} alt="bank icon" />
          Nationwide
          <BankButton type="radio" name="bank" />
        </BankButtonLabel>
      </Banks>
    </form>
  </CardWrapper>
);

export default BankSelect;
