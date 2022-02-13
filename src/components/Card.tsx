import React, { useState } from 'react';
import styled from 'styled-components';
import { P, Strong } from './Typography';

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const PaymentDeatils = styled(P)`
  width: 100%;
`;

interface CardProps {
  amount?: string;
  depositTo?: string;
  title: string;
  isAccordion?: boolean;
}

const Card: React.FunctionComponent<CardProps> = ({
  amount,
  depositTo,
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
        <Strong>{title}</Strong>
        {isExpanded ||
          (amount && depositTo && (
            <PaymentDeatils>
              <span className="accent-text-black-bold">:</span> {` `} Pay
              {` `}
              <span className="accent-text-black-bold">
                £ {` `}
                {amount}
              </span>
              {` `}
              to
              {` `}
              {depositTo}
            </PaymentDeatils>
          ))}
        {isAccordion && (
          <ButtonWrapper>
            <AccordionButton
              type="button"
              aria-expanded={isExpanded}
              onClick={handleTriggerClick}
            >
              &gt;
            </AccordionButton>
          </ButtonWrapper>
        )}
      </CardHeader>
      {(!isAccordion || isExpanded) && children}
    </CardWrapper>
  );
};

export default Card;
