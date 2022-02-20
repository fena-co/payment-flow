import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/icons/arrow.svg';

import { H2 } from '../components/Typography';

const Head = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: var(--space-2);
`;

const Back = styled(Link)`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #13273f;
  text-decoration: none;
  font-weight: bold;
  color: white;
  margin-right: var(--space-1);
`;

const BackIcon = styled.img`
  margin-right: 0.1rem;
`;
interface HeaderProps {
  title: string;
  backUrl?: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ backUrl, title }) => (
  <Head>
    {backUrl && (
      <Back to={backUrl}>
        <BackIcon src={arrow} alt="back" />
      </Back>
    )}
    <H2>{title}</H2>
  </Head>
);

export default Header;
