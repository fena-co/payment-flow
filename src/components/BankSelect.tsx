import React from 'react';
import styled from 'styled-components';
import { LabelLoweCase } from './Typography';

const CardWrapper = styled.section``;

const Search = styled.input`
  width: 100%;
`;

const Banks = styled.div``;

const BankButtonLabel = styled.label``;
const BankButton = styled.input``;

const QrCodeIcon = styled.img`
  margin-right: var(--space-2);
`;

const BankSelect: React.FunctionComponent = () => {
  return (
    <CardWrapper>
      <LabelLoweCase>Pay with online banking</LabelLoweCase>
      <form>
        <Search type="text" placeholder="Select all banks" />
        <Banks>button</Banks>
      </form>
    </CardWrapper>
  );
};

export default BankSelect;
