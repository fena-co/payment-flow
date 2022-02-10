import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import Section from '@/components/Section';
import Card from '../../components/Card';
import Header from '../../containers/Header';
import { Label, P, Subtitle } from '../../components/Typography';
import OvalButton from '../../components/OvalButton';

const Content = styled.div`
  display: flex;
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

const InputLabel = styled(P)`
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

const Currency = styled(Subtitle)`
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

const RightText = styled.div``;

const RightButton = styled.div`
  @media (max-width: 900px) {
    height: 30%;
  }
`;

interface AmountFormValues {
  amount: number;
}

const TopUpStep1Page: React.FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<AmountFormValues>();

  const onSubmit = (data) => console.log(data);

  return (
    <Section>
      <Header title="Top Up" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card title="Summary:">
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
                <Label>Payment method</Label>
                <P>Instant Bank Transfer</P>
              </RightText>
              <RightButton>
                <OvalButton>Change</OvalButton>
              </RightButton>
            </Right>
          </Content>
        </Card>
      </form>
    </Section>
  );
};

export default TopUpStep1Page;
