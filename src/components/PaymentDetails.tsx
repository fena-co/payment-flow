import React from 'react';
import styled from 'styled-components';
import { P } from './Typography';

const CardWrapper = styled.section``;

const PaymentItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-1);
`;

const Span = styled.span`
  text-align: right;
`;

interface Mock {
  mock: {
    date: string;
    amount: string;
    depositTo: string;
    paymentMethod: string;
  };
}
interface PaymentDetailsCardProps {
  content: Mock;
}
const PaymentDetails: React.FunctionComponent<PaymentDetailsCardProps> = ({
  content: { mock },
}) => (
  <CardWrapper>
    <PaymentItem>
      <P className="accent-text-gray">Payment amount:</P>
      <Span className="accent-text-black-bold">
        £{` `}
        {mock.amount}
      </Span>
    </PaymentItem>
    <PaymentItem className="accent-text-gray">
      <P className="accent-text-gray">Deposit to:</P>
      <Span className="accent-text-black">{mock.depositTo}</Span>
    </PaymentItem>
    <PaymentItem>
      <P className="accent-text-gray">Payment method:</P>
      <Span className="accent-text-black">{mock.paymentMethod}</Span>
    </PaymentItem>
  </CardWrapper>
);

export default PaymentDetails;
