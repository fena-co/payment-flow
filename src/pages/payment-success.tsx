import { Layout, LoadingBlock } from '@/components';
import React, { FC, useEffect, useState } from 'react';
import Api from '@/utils/api';
import { PaymentSuccess } from '@/components/PaymentSuccess';
import { PaymentFailure } from '@/components/PaymentFailure';

const PaymentSuccessPage: FC<any> = ({ location }) => {
  const [data, setData] = useState<any>();
  const params = new URLSearchParams(location.search);
  const externalId = params.get(`customerPaymentId`);
  const status = params.get(`status`);
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
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data || !data?.company?.name) {
    return <LoadingBlock />;
  }

  return (
    <Layout>
      {status === `executed` ? (
        <PaymentSuccess data={data} />
      ) : (
        <PaymentFailure externalId={id} type={type} />
      )}
    </Layout>
  );
};

export default PaymentSuccessPage;
