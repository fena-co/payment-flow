import React, { useState } from 'react';
import styled from 'styled-components';
import { Provider } from '@/pages/pay';
import { Button } from '@/components/index';
import { LabelLowerCase /* , SmallP */ } from './Typography';
import searchIcon from '../assets/icons/searchIcon.svg';
import SingleBank from './SingleBank';
import BankListItem from './BankListItem';

const CardWrapper = styled.section``;

const CardLabel = styled(LabelLowerCase)`
  margin-bottom: var(--space-2);
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
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
  padding: var(--space-2) 0 var(--space-2) 3rem;
  background-color: #f4f7f9;
  border: 1px solid #dbe3eb;
  box-shadow: 0 9px 20px rgba(129, 129, 165, 0.05);
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

/* const Banner = styled.div`
  background-color: #19385e;
  border-radius: 10px;
  padding: var(--space-2);
  margin-bottom: var(--space-2);
`;

const BannerText = styled(SmallP)`
  color: white;
`; */

interface BankSelectProps {
  activeBank: Provider;
  setActiveBank: (value: Provider) => void;
  providerList: Array<Provider>;
  onContinue: () => void;
  loading?: boolean;
}

const BankSelect: React.FunctionComponent<BankSelectProps> = ({
  activeBank,
  setActiveBank,
  providerList,
  onContinue,
  loading,
}) => {
  const [filteredProviderList, setFilteredProviderList] =
    useState(providerList);
  const [search, setSearch] = useState<string>(``);

  const handleBankClick = (name: string) => () => {
    setActiveBank(providerList.find((item) => item.name === name));
  };

  const changeButtonHandler = () => {
    setActiveBank(undefined);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setFilteredProviderList(
      providerList.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
    );
  };

  const responsiveElement =
    typeof window !== `undefined` && window.innerWidth < 900;

  return (
    <CardWrapper>
      {/* activeBank && (
        <Banner>
          <BannerText>
            We are redirecting you to your bank. You&#39;ll be sent back here
            after you confirm your deposit
          </BannerText>
        </Banner>
      ) */}
      {!activeBank &&
        (responsiveElement ? (
          <CardLabel>
            We&#39;ll automatically send you to your bank to approve the fast
            and secure payment
          </CardLabel>
        ) : (
          <CardLabel>Pay with online banking. </CardLabel>
        ))}

      <Banks>
        {!activeBank && (
          <InputSection>
            <Search
              type="text"
              placeholder="Search all banks"
              value={search}
              onChange={handleSearch}
            />
            <InputIcon src={searchIcon} alt="input icon" />
          </InputSection>
        )}

        {!activeBank ? (
          filteredProviderList
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .map((bank) => (
              <BankListItem
                key={bank.externalId}
                onClick={handleBankClick(bank.name)}
                {...bank}
              />
            ))
        ) : (
          <SingleBank onClick={() => changeButtonHandler()} {...activeBank} />
        )}
      </Banks>
      <ButtonWrapper>
        <Button onClick={onContinue} disabled={!activeBank} loading={loading}>
          Continue
        </Button>
      </ButtonWrapper>
    </CardWrapper>
  );
};

export default BankSelect;
