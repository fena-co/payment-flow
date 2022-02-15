import React from 'react';
import styled from 'styled-components';
import { LabelLowerCase, SmallP } from './Typography';
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
import searchIcon from '../assets/icons/searchIcon.svg';
import SingleBank from './SingleBank';
import BankListItem from './BankListItem';

const CardWrapper = styled.section``;

const CardLabel = styled(LabelLowerCase)`
  margin-bottom: var(--space-2);
`;

const InputSection = styled.div`
  position: relative;
  display: flex;
  flex-basis: 100%;

  margin-bottom: var(--space-1);
`;

const InputIcon = styled.img`
  position: absolute;
  left: 0;
  top: 3px;
  padding: 9px 8px;
`;

const Search = styled.input`
  flex-basis: 100%;
  padding: var(--space-2) 3rem;
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
  gap: 0.5rem;
`;

const Banner = styled.div`
  background-color: #19385e;
  border-radius: 10px;
  padding: var(--space-2);
  margin-bottom: var(--space-2);
`;

const BannerText = styled(SmallP)`
  color: white;
`;

interface BankSelectProps {
  activeBank: { label: string; logo: string };
  setActiveBank: (value) => void;
}

const BankSelect: React.FunctionComponent<BankSelectProps> = ({
  activeBank,
  setActiveBank,
}) => {
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

  const handleBankClick = (label) => {
    setActiveBank(banks.find((item) => item.label === label));
  };

  const changeButtonHandler = () => {
    setActiveBank(undefined);
  };

  return (
    <CardWrapper>
      {activeBank && (
        <Banner>
          <BannerText>
            We are redirecting you to your bank. You&#39;ll be sent back here
            after you confirm your deposit
          </BannerText>
        </Banner>
      )}
      {!activeBank && (
        <>
          <CardLabel>Pay with online banking</CardLabel>
          <CardLabel>
            We&#39;ll automatically send you to your bank to approve the fast
            and secure payment
          </CardLabel>
        </>
      )}

      <Banks>
        {!activeBank && (
          <InputSection>
            <Search type="text" placeholder="Search all banks" />
            <InputIcon src={searchIcon} alt="input icon" />
          </InputSection>
        )}

        {!activeBank ? (
          banks.map((bank) => (
            <BankListItem
              key={bank.label}
              onClick={() => handleBankClick(bank.label)}
              {...bank}
            />
          ))
        ) : (
          <SingleBank onClick={() => changeButtonHandler()} {...activeBank} />
        )}
      </Banks>
    </CardWrapper>
  );
};

export default BankSelect;
