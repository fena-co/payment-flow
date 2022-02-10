import React from 'react';

import Section from '@/components/Section';
import Header from '../../containers/Header';
import Card from '../../components/Card';

const TopUpStep2Page: React.FunctionComponent = () => (
  <Section>
    <Header title="Bank Select" backUrl="/top-up/step-1" />
    <Card title="Summary">Test</Card>
  </Section>
);

export default TopUpStep2Page;
