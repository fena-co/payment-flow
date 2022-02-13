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
  flex-basis: 25%;
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

const ChangeButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ChangeButton = styled.button`
  display: ${(props) => (props.hidden ? `initial` : `none`)};
  font-family: inherit;
  font-weight: bold;
  border: none;
  background-color: initial;
  cursor: pointer;
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
  const [bankItems, setBankItems] = useState([...banks]);
  const [showItemToggler, setShowItemToggler] = useState(false);

  const bankSelectHandler = (e) => {
    const id = e.target.getAttribute(`id`);
    setBankItems((currentItems) =>
      currentItems.filter((item) => item.label === id),
    );
    setShowItemToggler(!showItemToggler);
  };

  const changeButtonHandler = (e) => {
    e.preventDefault();
    setBankItems([...banks]);
    setShowItemToggler(!showItemToggler);
  };

  return (
    <>
      <CardWrapper>
        <CardLabel hidden={showItemToggler}>Pay with online banking</CardLabel>
        <Banks>
          <Search
            hidden={showItemToggler}
            type="text"
            placeholder="Search all banks"
          />
          {bankItems.map((bank) => (
            <BankButtonLabel hidden={showItemToggler} id={bank.label}>
              <BankIcon src={bank.logo} alt="bank icon" />
              {bank.label}
              <BankButton
                onClick={bankSelectHandler}
                id={bank.label}
                disabled={showItemToggler}
                type="radio"
                name="bank"
              />
              <ChangeButtonWrapper>
                <ChangeButton
                  onClick={changeButtonHandler}
                  hidden={showItemToggler}
                >
                  Change
                </ChangeButton>
              </ChangeButtonWrapper>
            </BankButtonLabel>
          ))}
        </Banks>
      </CardWrapper>
      <AgeementText hidden={showItemToggler}>
        By continuing to your selected bank, you accept our terms and privacy
        policy.
      </AgeementText>
    </>
  );
};

export default BankSelect;
