import React from 'react';
import styled from 'styled-components';
import { Strong } from './Typography';

const CardWrapper = styled.section`
  background-color: #fff;
  border-radius: 10px;
  padding: var(--space-3);
  /* @media (max-width: 900px) {
    flex-wrap: wrap;
    background-color: #fff;
    box-shadow: 0px 5px 20px rgba(129, 129, 165, 0.15);
  } */
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-2);
`;

interface CardProps {
  title: string;
  isAccordion?: boolean;
}

const Card: React.FunctionComponent<CardProps> = ({
  title,
  isAccordion,
  children,
}) => (
  <CardWrapper>
    <CardHeader>
      <Strong>{title}</Strong>
      {isAccordion && <button type="button">X</button>}
    </CardHeader>
    {children}
  </CardWrapper>
);

export default Card;
