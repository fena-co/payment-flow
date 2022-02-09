import Section from '@/components/Section';
import styled from 'styled-components';
import React from 'react';
import TopUpPanel from '@/components/TopUpPanel';

const MainSection = styled(Section)``;

const Home: React.FunctionComponent = () => (
  <MainSection>
    <TopUpPanel />
  </MainSection>
);

export default Home;
