import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  SecondaryButton,
  Button,
  PaymentDetails,
  QrCodeCard,
  BankSelect,
  SmallP,
  Strong,
  Layout,
  Card,
  LoadingBlock,
} from '@/components';
import Header from '../../containers/Header';
import Api from '../../utils/api';

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

export interface Provider {
  name: string;
  logo: string;
  externalId: string;
}

const EcommercePage: React.FunctionComponent<any> = ({ location }) => {
  const [data, setData] = useState<any>();
  const [providersList, setProvidersList] = useState<Array<Provider>>([]);
  const [activeBank, setActiveBank] = useState<Provider>();
  const params = new URLSearchParams(location.search);
  const invoiceId = params.get(`i`);
  const paymentId = params.get(`p`);
  const type = invoiceId ? `invoice` : `payment`;

  const getProvidersData = async () => {
    const res = await Api.getProviderList();
    console.warn(res);
    setProvidersList(
      (res.data || []).map((p) => ({
        name: p.name,
        logo: p.logo,
        externalId: p.externalId,
      })),
    );
  };

  const getPaymentData = async (id: string) => {
    const res = await Api.getPaymentInfo(id);
    console.warn(res);
    setData(res.data);
  };

  const getInvoiceData = async (id: string) => {
    const res = await Api.getInvoiceInfo(id);
    console.warn(res.result);
    setData(res.result);
  };

  useEffect(() => {
    getProvidersData();
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
    respnsiveTitle:
      typeof window !== `undefined` && window.innerWidth < 900
        ? `Select your bank`
        : `Can't scan the QR code?`,
    date: `25 Nov 2021, 13:38pm`,
    paymentMethod: `Instant Bank Transfer`,
  };

  const onConfirmPayment = async () => {
    let providerApiResult;
    switch (type) {
      case `invoice`:
        providerApiResult = await Api.initiatePayment(
          invoiceId,
          type,
          activeBank.externalId,
        );
        break;
      case `payment`:
        providerApiResult = await Api.initiatePayment(
          paymentId,
          type,
          activeBank.externalId,
        );
        break;
      default:
    }
    console.warn(providerApiResult);
    window.open(providerApiResult.data.result.auth_flow.uri, `_blank`);
  };

  return (
    <Layout>
      {data ? (
        <>
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
                  £ {` `}
                  {data?.amount}
                </span>
                {` `}
                to
                {` `}
                {data?.company?.name}
              </>
            }
            isAccordion
          >
            <PaymentDetails
              amount={data?.amount}
              depositTo={data?.company?.name}
              {...mock}
            />
          </Card>

          <ResponsiveCard>
            <Card
              defaultExpanded
              title="Scan the QR code with your phone "
              isAccordion
            >
              <QrCodeCard />
            </Card>
          </ResponsiveCard>

          <Card defaultExpanded title={mock.respnsiveTitle} isAccordion>
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
            <Button onClick={onConfirmPayment} disabled={!activeBank}>
              Continue
            </Button>
          </Buttons>
        </>
      ) : (
        <LoadingBlock minHeight={500} />
      )}
    </Layout>
  );
};

export default EcommercePage;
