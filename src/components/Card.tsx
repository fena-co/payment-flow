import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Strong } from './Typography';

const responsiveCSS = css`
  @media (max-width: 900px) {
    display: none;
  }
`;

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
`;

const AccordionButton = styled.button`
  ${responsiveCSS}
  transform: ${(props) =>
    props[`aria-expanded`] ? `rotate(270deg)` : `rotateZ(90deg)`};
  width: 30px;
  height: 30px;
  font-weight: bold;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border: none;
`;

const CardTitle: React.FunctionComponent<any> = ({ children }) =>
  typeof children === `string` ? <Strong>{children}</Strong> : children;

interface CardProps {
  title: string | JSX.Element;
  collapsedTitle?: string | JSX.Element;
  isAccordion?: boolean;
}

const Card: React.FunctionComponent<CardProps> = ({
  title,
  collapsedTitle,
  isAccordion,
  children,
}) => {
  const [isExpanded, setExpanded] = useState(window.innerWidth < 900);

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
            &gt;
          </AccordionButton>
        )}
      </CardHeader>
      {(!isAccordion || isExpanded) && children}
    </CardWrapper>
  );
};

export default Card;
