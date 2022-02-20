import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Layout from '@/components/Layout';
import Card from '../../components/Card';
import Header from '../../containers/Header';
import { Label, P, Subtitle } from '../../components/Typography';
import OvalButton from '../../components/OvalButton';
import SecondaryButton from '../../components/SecondaryButton';
import Button from '../../components/Button';

const Content = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const GraySection = styled.div`
  background-color: #f4f7f9;
  border-radius: 10px;
  padding: var(--space-2);
`;

const GrayRowSection = styled(GraySection)`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1 1 50%;
  border-right: 1px solid #dbe3eb;
  padding-right: var(--space-3);
  @media (max-width: 900px) {
    border-right: none;
    padding-right: 0;
    flex-basis: 100%;
    margin-bottom: var(--space-2);
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

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const InputLine = styled.div`
  display: flex;
  align-items: center;
`;

const Currency = styled(Subtitle)`
  margin-left: var(--space-2);
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  padding-left: var(--space-3);
  @media (max-width: 900px) {
    padding-left: 0;
  }
`;

const Buttons = styled.div`
  padding: var(--space-2);
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

const CancelButton = styled.div`
  margin-right: var(--space-2);
`;

interface AmountFormValues {
  amount: number;
}

const TopUpStep1Page: React.FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<AmountFormValues>({ mode: `onChange` });

  const onSubmit = () => {
    // console.log(data);
  };

  return (
    <Layout>
      <Header title="Top Up" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card title="Summary">
          <Content>
            <Left>
              <Label>Select amount to top up</Label>
              <GraySection>
                <InputLine>
                  <Input
                    type="number"
                    placeholder="0"
                    min={0}
                    step={0.01}
                    {...register(`amount`, {
                      required: true,
                      min: 0.01,
                      onBlur: (e) => {
                        e.target.value = parseFloat(e.target.value).toFixed(2);
                      },
                    })}
                  />
                  <Currency>£</Currency>
                </InputLine>
              </GraySection>
            </Left>
            <Right>
              <div>
                <Label>Payment method</Label>
              </div>
              <GrayRowSection>
                <P>Instant Bank Transfer</P>
                <OvalButton>Change</OvalButton>
              </GrayRowSection>
            </Right>
          </Content>
        </Card>

        <Buttons>
          <CancelButton>
            <SecondaryButton>Cancel</SecondaryButton>
          </CancelButton>
          <Button disabled={!isDirty || !isValid} type="submit">
            Continue
          </Button>
        </Buttons>
      </form>
    </Layout>
  );
};

export default TopUpStep1Page;
