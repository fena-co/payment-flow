import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  SecondaryButton,
  Button,
  PaymentDetails,
  QrCodeCard,
  BankSelect,
  P,
  SmallP,
  Strong,
  Layout,
  Card,
} from '@/components';
import Api from '@/utils/api';
import { Provider } from '@/pages/pay';
import Header from '../../containers/Header';

const CollapsedCardTitle = styled(Strong)`
  text-transform: uppercase;
`;

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

const QrCodesPage: React.FunctionComponent = () => {
  const [activeBank, setActiveBank] = useState<Provider>();
  const [providersList, setProvidersList] = useState<Array<Provider>>([]);
  const getProvidersData = async () => {
    const data = await Api.getProviderList();
    console.warn(data);
    setProvidersList(
      data.map((p) => ({
        name: p.name,
        logo: p.logo,
        externalId: p.externalId,
      })),
    );
  };

  useEffect(() => {
    getProvidersData();
  }, []);

  const mock = {
    respnsiveTitle:
      typeof window !== `undefined` && window.innerWidth < 900
        ? `Select your bank`
        : `Can't scan the QR code?`,
    date: `25 Nov 2021, 13:38pm`,
    amount: `50.00`,
    payTo: `Coinbase`,
    paymentMethod: `Instant Bank Transfer`,
    accountNumber: `10987654321`,
    sortCode: `20-00-00`,
    paymentReference: `MODE8e7af35f2ca41E`,
  };

  return (
    <Layout>
      <Header title="Bank Select" />
      <Card
        defaultExpanded
        title="Summary"
        collapsedTitle={
          <>
            <CollapsedCardTitle>Summary: </CollapsedCardTitle>
            Pay
            {` `}
            <span className="accent-text-black-bold">
              ?? {` `}
              {mock.amount}
            </span>
            {` `}
            to
            {` `}
            {mock.payTo}
          </>
        }
        isAccordion
      >
        <PaymentDetails {...mock} />
      </Card>

      <Card title="Comment" defaultExpanded isAccordion>
        <P>
          This is a custom message for the payer if a message is inputted from
          the app.
        </P>
      </Card>

      <ResponsiveCard>
        <Card
          title="Scan the QR code with your phone "
          isAccordion
          defaultExpanded
        >
          <QrCodeCard />
        </Card>
      </ResponsiveCard>

      <Card title={mock.respnsiveTitle} isAccordion defaultExpanded>
        <BankSelect
          providerList={providersList}
          activeBank={activeBank}
          setActiveBank={setActiveBank}
        />
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

export default QrCodesPage;
