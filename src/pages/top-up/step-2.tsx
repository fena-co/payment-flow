import React, { useState } from 'react';
import styled from 'styled-components';
import SecondaryButton from '@/components/SecondaryButton';
import Button from '@/components/Button';
import PaymentDetails from '@/components/PaymentDetails';
import QrCodeCard from '@/components/QrCodeCard';
import BankSelect from '@/components/BankSelect';
import { SmallP, Strong } from '@/components/Typography';
import Layout from '@/components/Layout';
import Card from '../../components/Card';
import Header from '../../containers/Header';

const ResponsiveCard = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
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

const AgeementText = styled(SmallP)`
  text-align: center;
  margin-top: var(--space-2);
`;

const Link = styled.a`
  text-decoration: none;
  color: #38b6ff;
`;

const TopUpStep2Page: React.FunctionComponent = () => {
  const mock = {
    respnsiveTitle:
      typeof window !== `undefined` && window.innerWidth < 900
        ? `Select your bank`
        : `Can't scan the QR code?`,
    date: `25 Nov 2021, 13:38pm`,
    amount: `50`,
    depositTo: `Coinbase`,
    paymentMethod: `Instant Bank Transfer`,
  };

  const [activeBank, setActiveBank] =
    useState<{ label: string; logo: string }>();

  return (
    <Layout>
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
        <PaymentDetails {...mock} />
      </Card>

      <ResponsiveCard>
        <Card title="Scan the QR code with your phone " isAccordion>
          <QrCodeCard />
        </Card>
      </ResponsiveCard>

      <Card title={mock.respnsiveTitle} isAccordion>
        <BankSelect activeBank={activeBank} setActiveBank={setActiveBank} />
      </Card>
      {activeBank && (
        <AgeementText>
          By continuing to your selected bank, you accept our {` `}
          <Link
            target="_blank"
            href="https://www.fena.co/terms-and-conditions/"
          >
            terms
          </Link>
          {` `}
          and
          {` `}
          <Link target="_blank" href="https://www.fena.co/privacy-policy/">
            privacy policy
          </Link>
          .
        </AgeementText>
      )}

      <Buttons>
        <CancelButton>
          <SecondaryButton>Cancel</SecondaryButton>
        </CancelButton>
        <Button disabled={!activeBank}>Continue</Button>
      </Buttons>
    </Layout>
  );
};

export default TopUpStep2Page;
