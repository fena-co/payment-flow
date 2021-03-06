import tick from '@/assets/icons/ready.svg';
import { SmallP, Subtitle } from '@/components/Typography';
import { DateTime } from 'luxon';
import { LoadingBlock, PaymentDetails } from '@/components/index';
import React from 'react';
import styled from 'styled-components';

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

const StyledSmallP = styled(SmallP)`
  margin-top: var(--space-3);
  text-align: center;
`;

export const PaymentSuccess = ({ data }) => (
  <Wrapper>
    <Top>
      <Circle>
        <Tick src={tick} alt="tick" />
      </Circle>
      <PageLabel>Payment successful</PageLabel>
      <SmallP className="accent-text-gray">
        {data?.completedAt
          ? DateTime.fromISO(data.completedAt).toFormat(`dd LLL yyyy, HH:mm`)
          : DateTime.now().toFormat(`dd LLL yyyy, HH:mm`)}
      </SmallP>
    </Top>
    <Bottom>
      {data ? (
        <PaymentDetails amount={data?.amount} paidTo={data?.company.name} />
      ) : (
        <LoadingBlock />
      )}
    </Bottom>
    <StyledSmallP>You can now close this page</StyledSmallP>
  </Wrapper>
);
