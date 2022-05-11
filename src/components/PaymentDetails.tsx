import React from 'react';
import styled from 'styled-components';
import { formatAmount, formatSortCode } from '@/utils/format';
import { P } from './Typography';

const CardWrapper = styled.section``;

const PaymentItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-2);
`;

const Span = styled.span`
  text-align: right;
`;

interface PaymentDetailsCardProps {
  amount: string;
  depositTo?: string;
  payTo?: string;
  paymentMethod?: string;
  accountNumber?: string;
  sortCode?: string;
  paymentReference?: string;
}
const PaymentDetails: React.FunctionComponent<PaymentDetailsCardProps> = ({
  amount,
  depositTo,
  payTo,
  paymentMethod,
  accountNumber,
  paymentReference,
  sortCode,
}) => (
  <CardWrapper>
    <PaymentItem>
      <P className="accent-text-gray">Payment amount:</P>
      <Span className="accent-text-black-bold">
        £{` `}
        {formatAmount(amount)}
      </Span>
    </PaymentItem>
    {depositTo && (
      <PaymentItem className="accent-text-gray">
        <P className="accent-text-gray">Deposit to:</P>
        <Span className="accent-text-black">{depositTo}</Span>
      </PaymentItem>
    )}
    {payTo && (
      <PaymentItem className="accent-text-gray">
        <P className="accent-text-gray">Pay to:</P>
        <Span className="accent-text-black">{payTo}</Span>
      </PaymentItem>
    )}

    {paymentMethod && (
      <PaymentItem>
        <P className="accent-text-gray">Payment method:</P>
        <Span className="accent-text-black">{paymentMethod}</Span>
      </PaymentItem>
    )}
    {accountNumber && (
      <PaymentItem>
        <P className="accent-text-gray">Account number:</P>
        <Span className="accent-text-black">{accountNumber}</Span>
      </PaymentItem>
    )}
    {sortCode && (
      <PaymentItem>
        <P className="accent-text-gray">Sort code:</P>
        <Span className="accent-text-black">{formatSortCode(sortCode)}</Span>
      </PaymentItem>
    )}
    {paymentReference && (
      <PaymentItem>
        <P className="accent-text-gray">Payment reference:</P>
        <Span className="accent-text-black">{paymentReference}</Span>
      </PaymentItem>
    )}
  </CardWrapper>
);

export default PaymentDetails;
