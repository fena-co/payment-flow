import Button from '@/components/Button';
import Layout from '@/components/Layout';
import SecondaryButton from '@/components/SecondaryButton';
import { P, Subtitle } from '@/components/Typography';
import React from 'react';
import styled from 'styled-components';
import cross from '../assets/icons/failed.svg';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 13px 40px rgba(108, 108, 138, 0.15);
  border-radius: 10px;
  padding: var(--space-4) var(--space-5);
  @media (max-width: 900px) {
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }
`;

const Top = styled.div`
  border-bottom: 1px solid #dbe3eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: var(--space-3);
`;
const Circle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #ef6355;
  border: 10px solid #ffe8e6;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;
const Tick = styled.img``;

const PageLabel = styled(Subtitle)`
  margin-top: var(--space-3);
  margin-bottom: var(--space-1);
`;

const Bottom = styled.div`
  padding-top: var(--space-3);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-3);
  @media (max-width: 900px) {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin-bottom: var(--space-2);
  }
`;

const Ol = styled.ol`
  margin-top: var(--space-3);
`;

const Li = styled.li`
  color: var(--dark-text);
  margin-bottom: var(--space-2);
  ::marker {
    font-weight: bold;
    color: var(--dark-text);
  }
`;

const SecondaryButtonWrapper = styled.div`
  margin-right: var(--space-1);
`;
const PaymentSuccessPage: React.FunctionComponent = () => (
  <Layout>
    <Wrapper>
      <Top>
        <Circle>
          <Tick src={cross} alt="tick" />
        </Circle>
        <PageLabel>Payment was not successful</PageLabel>
      </Top>
      <Bottom>
        <P>
          In the case your payment showing a failed transaction, please do the
          following:
        </P>
        <Ol>
          <Li className="accent-text-gray">
            Double check the mobile number you entered is correct.
          </Li>
          <Li className="accent-text-gray">
            Check your number is registered with your passport or ID number.
          </Li>
          <Li className="accent-text-gray">
            Check that your number is active and not expired.
          </Li>
        </Ol>
      </Bottom>
      <ButtonWrapper>
        <SecondaryButtonWrapper>
          <SecondaryButton>Cancel</SecondaryButton>
        </SecondaryButtonWrapper>

        <Button>Try again</Button>
      </ButtonWrapper>
    </Wrapper>
  </Layout>
);

export default PaymentSuccessPage;
