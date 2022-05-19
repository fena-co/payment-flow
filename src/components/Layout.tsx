import React from 'react';
import styled from 'styled-components';
// import { P } from './Typography';

const Section = styled.section`
  height: calc(100vh - 5rem * 2);
  padding: 5rem calc((100vw - 800px) / 2);
  overflow-y: scroll;
  background-color: #f4f7f9;
  position: relative;
  @media (max-width: 900px) {
    height: calc(100vh - 3rem * 2);
    padding: 3rem var(--space-2);
  }
`;

/* const Banner = styled.div`
  padding: var(--space-2);
  background: linear-gradient(
    270deg,
    #7914c9 12.33%,
    #af14c9 99.99%,
    #af14c9 100%
  );
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const BannerText = styled(P)`
  color: white;
`; */

const Layout: React.FunctionComponent = ({ children }) => (
  <Section>{children}</Section>
);

export default Layout;
