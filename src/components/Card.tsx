import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Strong } from './Typography';
import arrow from '../assets/icons/downArrow.svg';

const CardWrapper = styled.section`
  background-color: #fff;
  border-radius: 10px;
  padding: var(--space-3);
  margin-bottom: var(--space-2);
  box-shadow: 0px 2px 15px rgba(108, 108, 138, 0.15);
`;

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) =>
    props[`aria-expanded`] ? `var(--space-3)` : `0`};
`;

const CardTitleWrapper = styled.div`
  flex: 1 0 auto;
  @media (max-width: 900px) {
    flex: initial;
  }
`;

const CardTitleText = styled(Strong)`
  text-transform: uppercase;
`;
const AccordionButton = styled.button`
  transform: ${(props) =>
    props[`aria-expanded`] ? `rotate(180deg)` : `rotateZ(0deg)`};
  width: 30px;
  height: 30px;
  font-weight: bold;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border: none;
  @media (max-width: 900px) {
    display: none;
  }
`;

const BackIcon = styled.img``;

const CardTitle: React.FunctionComponent<any> = ({ children }) =>
  typeof children === `string` ? (
    <CardTitleText>{children}</CardTitleText>
  ) : (
    children
  );

interface CardProps {
  title: string | JSX.Element;
  collapsedTitle?: string | JSX.Element;
  isAccordion?: boolean;
  defaultExpanded?: boolean;
}

const Card: React.FunctionComponent<CardProps> = ({
  title,
  collapsedTitle,
  isAccordion,
  defaultExpanded,
  children,
}) => {
  const [isExpanded, setExpanded] = useState(defaultExpanded || false);
  useEffect(() => {
    if (!defaultExpanded) {
      setExpanded(typeof window !== `undefined` && window.innerWidth < 900);
    }
  }, []);

  const handleTriggerClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <CardWrapper>
      <CardHeader aria-expanded={!isAccordion || isExpanded}>
        <CardTitleWrapper>
          {!isExpanded ? (
            <CardTitle>{collapsedTitle || title}</CardTitle>
          ) : (
            <CardTitle>{title}</CardTitle>
          )}
        </CardTitleWrapper>

        {isAccordion && (
          <AccordionButton
            type="button"
            aria-expanded={isExpanded}
            onClick={handleTriggerClick}
          >
            <BackIcon src={arrow} alt="back" />
          </AccordionButton>
        )}
      </CardHeader>
      {(!isAccordion || isExpanded) && children}
    </CardWrapper>
  );
};

export default Card;
