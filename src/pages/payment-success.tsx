import { Layout, LoadingBlock } from '@/components';
import React, { FC, useEffect, useState } from 'react';
import Api from '@/utils/api';
import { PaymentSuccess } from '@/components/PaymentSuccess';
import { PaymentFailure } from '@/components/PaymentFailure';
import { PaymentPending } from '@/components/PaymentPending';

const PaymentSuccessPage: FC<any> = ({ location }) => {
  const [data, setData] = useState<any>();
  const params = new URLSearchParams(location.search);
  const externalId = params.get(`customerPaymentId`);
  const [status, setStatus] = useState(params.get(`status`));
  const [type, id] = (externalId || ``).split(`_`);

  const getData = async () => {
    let res;
    switch (type) {
      case `payment`:
        res = await Api.getPaymentInfo(id);
        console.log(res);
        setData(res.data);
        break;
      case `invoice`:
        res = await Api.getInvoiceInfo(id);
        console.log(res);
        setData(res.data);
        break;
      default:
    }
    return res;
  };

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = async () => {
    const result = await getData();
    if (result.data) {
      switch (result.data.status) {
        case `paid`:
          setStatus(`executed`);
          break;
        case `rejected`:
        case `cancelled`:
          setStatus(`rejected`);
          break;
        default:
      }
    }
  };

  if (!data || !data?.company?.name) {
    return <LoadingBlock />;
  }

  return (
    <Layout>
      {/* eslint-disable-next-line no-nested-ternary */}
      {status === `executed` ? (
        <PaymentSuccess data={data} />
      ) : status === `pending` ? (
        <PaymentPending data={data} onRefresh={onRefresh} />
      ) : (
        <PaymentFailure externalId={id} type={type} />
      )}
    </Layout>
  );
};

export default PaymentSuccessPage;
