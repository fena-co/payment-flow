import { Layout, LoadingBlock } from '@/components';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import Api from '@/utils/api';

const Bottom = styled.div`
  padding-top: var(--space-3);
`;
const PaymentSuccessPage: FC<any> = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const terminalId = params.get(`id`);

  const getLink = async (id: string) => {
    try {
      const res = await Api.getLastPaymentByTerminal(id);
      console.log(res.data);
      if (res.data.link && window) {
        window.location.replace(res.data.link);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getLink(terminalId);
  }, []);

  return (
    <Layout>
      <Bottom>
        <LoadingBlock />
      </Bottom>
    </Layout>
  );
};

export default PaymentSuccessPage;
