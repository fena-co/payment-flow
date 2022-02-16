import Button from '@/components/Button';
import Layout from '@/components/Layout';
import PaymentDetails from '@/components/PaymentDetails';
import { SmallP, Subtitle } from '@/components/Typography';
import React from 'react';
import styled from 'styled-components';
import tick from '../assets/icons/ready.svg';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 13px 40px rgba(108, 108, 138, 0.15);
  border-radius: 10px;
  padding: var(--space-4) var(--space-5);
  @media (max-width: 900px) {
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }
`;

const Top = styled.div`
  border-bottom: 1px solid #dbe3eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: var(--space-3);
`;
const Circle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #2cd19e;
  border: 10px solid #ccf0e3;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;
const Tick = styled.img``;

const PageLabel = styled(Subtitle)`
  margin-top: var(--space-3);
  margin-bottom: var(--space-1);
`;

const Bottom = styled.div`
  padding-top: var(--space-3);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-3);
  @media (max-width: 900px) {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin-bottom: var(--space-2);
  }
`;
const PaymentSuccessPage: React.FunctionComponent = () => {
  const mock = {
    date: `25 Nov 2021, 13:38pm`,
    amount: `50`,
    depositTo: `Coinbase`,
    paymentMethod: `Instant Bank Transfer`,
  };
  return (
    <Layout>
      <Wrapper>
        <Top>
          <Circle>
            <Tick src={tick} alt="tick" />
          </Circle>
          <PageLabel>Payment successful</PageLabel>
          <SmallP className="accent-text-gray">{mock.date}</SmallP>
        </Top>
        <Bottom>
          <PaymentDetails {...mock} />
        </Bottom>
        <ButtonWrapper>
          <Button>Done</Button>
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  );
};

export default PaymentSuccessPage;
