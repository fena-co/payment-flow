import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  PaymentDetails,
  QrCodeCard,
  BankSelect,
  SmallP,
  Strong,
  Layout,
  Card,
  LoadingBlock,
} from '@/components';
import QRCode from 'qrcode';
import { formatAmount } from '@/utils/format';
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
  const [providerGeneratedLink, setProviderGeneratedLink] = useState(``);
  const [providerDataLoading, setProviderDataLoading] = useState(false);
  const [generatedQRData, setGeneratedQRData] = useState<string | undefined>();
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
    console.warn(res.data);
    setData(res.data);
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

  const onBankChange = (bank: Provider | undefined) => {
    if (!bank) {
      setGeneratedQRData(undefined);
      setProviderGeneratedLink(``);
      setActiveBank(undefined);
    } else {
      setActiveBank(bank);
    }
  };

  const onContinue = async () => {
    setProviderDataLoading(true);
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
    const qr = await QRCode.toDataURL(
      providerApiResult.data.result.auth_flow.uri,
    );
    setGeneratedQRData(qr);
    setProviderGeneratedLink(providerApiResult.data.result.auth_flow.uri);
    setProviderDataLoading(false);
  };

  const onConfirmPayment = () => {
    window.location.replace(providerGeneratedLink);
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
                  {formatAmount(data.amount)}
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
              amount={data.amount}
              depositTo={data.company?.name}
              sortCode={data.beneficiaryBankAccount?.identification}
              accountNumber={data.beneficiaryBankAccount?.externalAccountId}
              paymentReference={data.invoiceRefNumber}
            />
          </Card>

          <Card defaultExpanded title="Select your bank" isAccordion>
            <BankSelect
              providerList={providersList}
              activeBank={activeBank}
              setActiveBank={onBankChange}
              onContinue={onContinue}
              loading={providerDataLoading}
            />
          </Card>

          {/* <Buttons>
            <CancelButton>
              <SecondaryButton>Cancel</SecondaryButton>
            </CancelButton>
            <Button onClick={onContinue} disabled={!activeBank}>
              Continue
            </Button>
          </Buttons> */}

          {providerGeneratedLink && generatedQRData && (
            <ResponsiveCard>
              <Card
                defaultExpanded
                title="Scan the QR code with your phone or continue on desktop"
                isAccordion
              >
                <QrCodeCard
                  qrData={generatedQRData}
                  onContinue={onConfirmPayment}
                />
              </Card>
            </ResponsiveCard>
          )}
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
        </>
      ) : (
        <LoadingBlock minHeight={500} />
      )}
    </Layout>
  );
};

export default EcommercePage;
