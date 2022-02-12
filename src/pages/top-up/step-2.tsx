import React from 'react';

import Section from '@/components/Section';
import Header from '../../containers/Header';
import Card from '../../components/Card';
import PaymentDetails from '@/components/PaymentDetails';
import QrCodeCard from '@/components/QrCodeCard';



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
      <Card title="Summary" isAccordion>
        <PaymentDetails content={{ mock }} />
      </Card>
      <Card title="Scan the QR code with your phone " isAccordion>
        <QrCodeCard />
      </Card>
      <Card title="Can't scan the QR code?" isAccordion>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio
        adipisci vel maxime, inventore magni alias? Consequuntur cupiditate
        repellat fuga autem. Hic inventore sapiente aut sint quos dicta
        quibusdam non. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia optio adipisci vel maxime, inventore magni alias? Consequuntur
        cupiditate repellat fuga autem. Hic inventore sapiente aut sint quos
        dicta quibusdam non. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Mollitia optio adipisci vel maxime, inventore magni alias?
        Consequuntur cupiditate repellat fuga autem. Hic inventore sapiente aut
        sint quos dicta quibusdam non. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Mollitia optio adipisci vel maxime, inventore magni
        alias? Consequuntur cupiditate repellat fuga autem. Hic inventore
        sapiente aut sint quos dicta quibusdam non.
      </Card>
    </Section>
  );
};

export default TopUpStep2Page;
