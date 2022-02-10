import React, { useState } from 'react';
import { Body4, SmallP, Strong, Subtitle4 } from '@/components/Typography';
import styled from 'styled-components';
import SecondaryButton from '@/components/SecondaryButton';
import ButtonDefault from '@/components/ButtonDefault';
import { useForm } from 'react-hook-form';
import OvalButton from './OvalButton';
import ButtonRound from './ButtonRound';

const Wrapper = styled.div`
  background-color: #ffff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 2px 15px rgba(108, 108, 138, 0.15);
  @media (max-width: 1200px) {
    background-color: #f4f7f9;
    box-shadow: none;
    padding: 0;
  }
`;

const Header = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

const HeaderStrong = styled(Strong)`
  @media (max-width: 1200px) {
    text-align: center;
    flex-grow: 1;
  }
`;

const Content = styled.div`
  display: flex;
  margin-top: 1.5rem;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    background-color: #f4f7f9;
  }
`;

const InputSection = styled.div`
  background-color: #f4f7f9;
  border-radius: 10px;
  padding: 1rem;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    background-color: #ffff;
    box-shadow: 0px 5px 20px rgba(129, 129, 165, 0.15);
  }
`;

const InputLabel = styled(Body4)`
  margin-bottom: 1rem;
`;
const Left = styled.div`
  flex: 1 1 50%;
  border-right: 1px solid #dbe3eb;
  padding-right: 2rem;
  @media (max-width: 1200px) {
    border-right: none;
    padding-right: 0;
    flex-basis: 100%;
  }
`;
const Input = styled.input`
  border: 1px solid #dbe3eb;
  border-radius: 10px;
  padding: 1rem;
  font-family: inherit;
  font-size: 26px;
  font-weight: bold;
  color: black;
  width: 100%;
`;

const InputLine = styled.div`
  display: flex;
  align-items: center;
`;

const Pound = styled(Subtitle4)`
  margin-left: 1rem;
`;

const Right = styled.div`
  flex: 1 1 50%;
  padding-left: 2rem;
  @media (max-width: 1200px) {
    padding-left: 0;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
`;

const StyledSmallP = styled(SmallP)`
  font-weight: 600;
`;

const StyledBody4 = styled(Body4)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    box-shadow: 0px -5px 20px rgba(194, 206, 219, 0.8);
    padding: 1rem;
  }
`;

const CancelButton = styled.div`
  margin-right: 1rem;
`;

const RightText = styled.div``;

const RightButton = styled.div`
  @media (max-width: 1200px) {
    height: 30%;
  }
`;
const TopUpPanel: React.FunctionComponent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [inputVal, setInputVal] = useState(``);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  console.log(inputVal);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Header>
          <ButtonRound> &lt; </ButtonRound>
          <HeaderStrong>TOP UP SUMMARY:</HeaderStrong>
        </Header>
        <Content>
          <Left>
            <InputSection>
              <InputLabel>Select amount to top up</InputLabel>
              <InputLine>
                <Input
                  onChange={handleChange}
                  value={inputVal}
                  type="number"
                  placeholder="0"
                  id="topUpSummary"
                  {...register(`topUpSummary`)}
                />
                <Pound>£</Pound>
              </InputLine>
            </InputSection>
          </Left>
          <Right>
            <RightText>
              <StyledSmallP className="accent-text-gray">
                PAYMENT METHOD
              </StyledSmallP>
              <StyledBody4>Instant Bank Transfer</StyledBody4>
            </RightText>
            <RightButton>
              <OvalButton>Change</OvalButton>
            </RightButton>
          </Right>
        </Content>
      </Wrapper>
      <Buttons>
        <CancelButton>
          <SecondaryButton>Cancel</SecondaryButton>
        </CancelButton>
        <ButtonDefault disabled={inputVal.length < 1}>Continue</ButtonDefault>
      </Buttons>
    </form>
  );
};

export default TopUpPanel;
