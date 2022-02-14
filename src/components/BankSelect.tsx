import React, { useState } from 'react';
import styled from 'styled-components';
import { LabelLoweCase, P } from './Typography';
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
import BankList from './BankList';
import SingleBank from './SingleBank';

const CardWrapper = styled.section``;

const CardLabel = styled(LabelLoweCase)`
  display: ${(props) => (props.hidden ? `none` : `block`)};
`;

const Search = styled.input`
  display: ${(props) => (props.hidden ? `none` : `initial`)};
  /* flex-basis: 100%; */
  width: 100%;
  padding: var(--space-2);
  background-color: #f4f7f9;
  border: 1px solid #dbe3eb;
  box-shadow: 0px 9px 20px rgba(129, 129, 165, 0.05);
  border-radius: 5px;
  font-family: inherit;
  font-size: 16px;
  color: var(--light-text);
  margin-bottom: var(--space-1);
`;

const Banks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
`;

const AgeementText = styled(P)`
  display: ${(props) => (props.hidden ? `block` : `none`)};
  text-align: center;
  margin-top: var(--space-2);
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
  // const [bankItems, setBankItems] = useState([...banks]);
  const [activeBank, setActiveBank] =
    useState<{ label: string; logo: string }>();

  const handleBankClick = (label) => {
    setActiveBank(banks.find((item) => item.label === label));
  };

  const changeButtonHandler = () => {
    setActiveBank(undefined);
  };

  return (
    <>
      <CardWrapper>
        <CardLabel>Pay with online banking</CardLabel>
        <Banks>
          <Search type="text" placeholder="Search all banks" />
          {!activeBank ? (
            banks.map((bank) => (
              <BankList onClick={() => handleBankClick(bank.label)} {...bank} />
            ))
          ) : (
            <SingleBank onClick={() => changeButtonHandler()} {...activeBank} />
          )}
        </Banks>
      </CardWrapper>
      <AgeementText>
        By continuing to your selected bank, you accept our terms and privacy
        policy.
      </AgeementText>
    </>
  );
};

export default BankSelect;
