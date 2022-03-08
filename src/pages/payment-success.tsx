import {
  Button,
  Layout,
  LoadingBlock,
  PaymentDetails,
  SmallP,
  Subtitle,
} from '@/components';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Api from '@/utils/api';
import tick from '../assets/icons/ready.svg';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 13px 40px rgba(108, 108, 138, 0.15);
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
const PaymentSuccessPage: FC<any> = ({ location }) => {
  const [data, setData] = useState<any>();
  const params = new URLSearchParams(location.search);
  const invoiceId = params.get(`i`);
  const paymentId = params.get(`p`);
  const type = invoiceId ? `invoice` : `payment`;

  const getPaymentData = async (id: string) => {
    const res = await Api.getPaymentInfo(id);
    console.warn(res);
    setData(res);
  };

  const getInvoiceData = async (id: string) => {
    const res = await Api.getInvoiceInfo(id);
    console.warn(res);
    setData(res);
  };

  useEffect(() => {
    switch (type) {
      case `invoice`:
        getInvoiceData(invoiceId);
        break;
      case `payment`:
        getPaymentData(paymentId);
        break;
      default:
    }
  }, [type]);

  const mock = {
    date: `25 Nov 2021, 13:38pm`,
    amount: `50.00`,
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
          <SmallP className="accent-text-gray">
            {DateTime.now().toFormat(`dd LLL yyyy, HH:MM`)}
          </SmallP>
        </Top>
        <Bottom>
          <LoadingBlock loading={!data}>
            <PaymentDetails
              amount={data.amount}
              depositTo={data.company.name}
              {...mock}
            />
          </LoadingBlock>
        </Bottom>
        <ButtonWrapper>
          <Button>Done</Button>
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  );
};

export default PaymentSuccessPage;
