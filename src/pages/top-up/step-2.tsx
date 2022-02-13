import React from 'react';

import Section from '@/components/Section';
import PaymentDetails from '@/components/PaymentDetails';
import QrCodeCard from '@/components/QrCodeCard';
import BankSelect from '@/components/BankSelect';
import Card from '../../components/Card';
import Header from '../../containers/Header';

const TopUpStep2Page: React.FunctionComponent = () => {
  const mock = {
    date: `25 Nov 2021, 13:38pm`,
    amount: `50`,
    depositTo: `Coinbase`,
    paymentMethod: `Instant Bank Transfer`,
  };
  return (
    <Section>
      <Header title="Bank Select" backUrl="/top-up/step-1" />
      <Card
        amount={mock.amount}
        depositTo={mock.depositTo}
        title="Summary"
        isAccordion
      >
        <PaymentDetails content={{ mock }} />
      </Card>
      <Card title="Scan the QR code with your phone " isAccordion>
        <QrCodeCard />
      </Card>
      <Card title="Can't scan the QR code?" isAccordion>
        <BankSelect />
      </Card>
    </Section>
  );
};

export default TopUpStep2Page;
