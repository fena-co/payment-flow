import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SecondaryButton from '@/components/SecondaryButton';
import Button from '@/components/Button';
import Section from '@/components/Layout';
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

const Buttons = styled.div`
  padding: var(--space-2);
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

const CancelButton = styled.div`
  margin-right: var(--space-2);
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

  const [activeBank, setActiveBank] =
    useState<{ label: string; logo: string }>();

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
        <BankSelect activeBank={activeBank} setActiveBank={setActiveBank} />
      </Card>
      <Buttons>
        <CancelButton>
          <SecondaryButton>Cancel</SecondaryButton>
        </CancelButton>
        <Button disabled={!activeBank}>Continue</Button>
      </Buttons>
    </Section>
  );
};

export default TopUpStep2Page;
