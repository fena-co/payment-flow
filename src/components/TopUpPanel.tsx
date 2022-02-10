import React from 'react';
import { Body4, SmallP, Strong, Subtitle4 } from '@/components/Typography';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import SecondaryButton from '@/components/SecondaryButton';
import Buttton from '@/components/Button';
import OvalButton from './OvalButton';
import ButtonRound from './ButtonRound';

const Wrapper = styled.div`
  background-color: #ffff;
  border-radius: 10px;
  padding: var(--space-3);
  box-shadow: 0px 2px 15px rgba(108, 108, 138, 0.15);
  @media (max-width: 900px) {
    background-color: #f4f7f9;
    box-shadow: none;
    padding: 0;
  }
`;

const Header = styled.div`
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
  }
`;

const HeaderStrong = styled(Strong)`
  @media (max-width: 900px) {
    text-align: center;
    flex-grow: 1;
  }
`;

const Content = styled.div`
  display: flex;
  margin-top: 1.5rem;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    background-color: #f4f7f9;
  }
`;

const InputSection = styled.div`
  background-color: #f4f7f9;
  border-radius: 10px;
  padding: var(--space-2);
  @media (max-width: 900px) {
    flex-wrap: wrap;
    background-color: #ffff;
    box-shadow: 0px 5px 20px rgba(129, 129, 165, 0.15);
  }
`;

const InputLabel = styled(Body4)`
  margin-bottom: var(--space-2);
`;
const Left = styled.div`
  flex: 1 1 50%;
  border-right: 1px solid #dbe3eb;
  padding-right: var(--space-3);
  @media (max-width: 900px) {
    border-right: none;
    padding-right: 0;
    flex-basis: 100%;
  }
`;
const Input = styled.input`
  border: 1px solid #dbe3eb;
  border-radius: 10px;
  padding: var(--space-2);
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

const Currency = styled(Subtitle4)`
  margin-left: var(--space-2);
`;

const Right = styled.div`
  flex: 1 1 50%;
  padding-left: var(--space-3);
  @media (max-width: 900px) {
    padding-left: 0;
    margin-top: var(--space-2);
    display: flex;
    justify-content: space-between;
  }
`;

const StyledSmallP = styled(SmallP)`
  font-weight: 600;
`;

const StyledBody4 = styled(Body4)`
  margin-top: var(--space-2);
  margin-bottom: var(--space-2);
`;

const Buttons = styled.div`
  margin-top: var(--space-3);
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    box-shadow: 0px -5px 20px rgba(194, 206, 219, 0.8);
    padding: var(--space-2);
  }
`;

const CancelButton = styled.div`
  margin-right: var(--space-2);
`;

const RightText = styled.div``;

const RightButton = styled.div`
  @media (max-width: 900px) {
    height: 30%;
  }
`;

interface AmountFormValues {
  amount: number;
}

const TopUpPanel: React.FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AmountFormValues>();

  const onSubmit = (data) => console.log(data);

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
                  type="number"
                  placeholder="0"
                  {...register(`amount`, { required: true, min: 1 })}
                />
                <Currency>£</Currency>
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
        <Buttton type="submit" disabled={Boolean(errors.amount)}>
          Continue
        </Buttton>
      </Buttons>
    </form>
  );
};

export default TopUpPanel;
