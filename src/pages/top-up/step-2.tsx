import React from 'react';
import styled, { css } from 'styled-components';
import Section from '@/components/Section';
import PaymentDetails from '@/components/PaymentDetails';
import QrCodeCard from '@/components/QrCodeCard';
import BankSelect from '@/components/BankSelect';
import { Strong } from '@/components/Typography';
import Card from '../../components/Card';
import Header from '../../containers/Header';

const responsiveCSS = css`
  @media (max-width: 900px) {
    display: none;
  }
`;

const ResponsiveCard = styled.div`
  ${responsiveCSS}
`;

const TopUpStep2Page: React.FunctionComponent = () => {
  const mock = {
    respnsiveTitle:
      window.innerWidth < 900 ? `Select your bank` : `Can't scan the QR code?`,
    date: `25 Nov 2021, 13:38pm`,
    amount: `50`,
    depositTo: `Coinbase`,
    paymentMethod: `Instant Bank Transfer`,
  };

  return (
    <Section>
      <Header title="Bank Select" backUrl="/top-up/step-1" />
      <Card
        title="Summary"
        collapsedTitle={
          <>
            <Strong>Summary: </Strong>
            Pay
            {` `}
            <span className="accent-text-black-bold">
              £ {` `}
              {mock.amount}
            </span>
            {` `}
            to
            {` `}
            {mock.depositTo}
          </>
        }
        isAccordion
      >
        <PaymentDetails content={{ mock }} />
      </Card>

      <ResponsiveCard>
        <Card title="Scan the QR code with your phone " isAccordion>
          <QrCodeCard />
        </Card>
      </ResponsiveCard>

      <Card title={mock.respnsiveTitle} isAccordion>
        <BankSelect />
      </Card>
    </Section>
  );
};

export default TopUpStep2Page;
