import React, { useState } from 'react';
import styled from 'styled-components';
import { Strong } from './Typography';

const CardWrapper = styled.section`
  background-color: #fff;
  border-radius: 10px;
  padding: var(--space-3);
  margin-bottom: var(--space-2);
  box-shadow: 0px 2px 15px rgba(108, 108, 138, 0.15);
  /* @media (max-width: 900px) {
    flex-wrap: wrap;
    background-color: #fff;
    box-shadow: 0px 5px 20px rgba(129, 129, 165, 0.15);
  } */
`;

const CardHeader = styled.header`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: ${(props) =>
    props[`aria-expanded`] ? `var(--space-3)` : `0`};
`;

const AccordionButton = styled.button`
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

interface CardProps {
  title: string | JSX.Element;
  isAccordion?: boolean;
}

const Card: React.FunctionComponent<CardProps> = ({
  title,
  isAccordion,
  children,
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const handleTriggerClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <CardWrapper>
      <CardHeader aria-expanded={!isAccordion || isExpanded}>
        {typeof title === `string` ? <Strong>{title}</Strong> : title}
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
