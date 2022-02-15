import React from 'react';
import styled from 'styled-components';
import { P } from './Typography';

const Section = styled.section`
  height: calc(100vh - 5rem * 2);
  padding: 5rem calc((100vw - 800px) / 2);
  overflow-y: scroll;
  background-color: #f4f7f9;
  @media (max-width: 900px) {
    height: calc(100vh - 3rem * 2);
    padding: 3rem var(--space-2);
  }
`;

const Banner = styled.div`
  padding: var(--space-2);
  background: linear-gradient(
    270deg,
    #7914c9 12.33%,
    #af14c9 99.99%,
    #af14c9 100%
  );
  display: flex;
  justify-content: center;
`;

const BannerText = styled(P)`
  color: white;
`;

const Link = styled.a`
  color: #00ffb2;
  font-weight: bold;
  text-decoration: none;
`;

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <Banner>
      <BannerText>
        ID verification, Connecting your bank account and Email confirmation are
        still required before you can start taking payments.{` `}
        <Link href="/">Complete account set-up</Link>
      </BannerText>
    </Banner>
    <Section>{children}</Section>
  </>
);

export default Layout;
