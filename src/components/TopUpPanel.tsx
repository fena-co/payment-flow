import React from 'react';
import { Body4, Strong } from '@/components/Typography';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #ffff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 2px 15px rgba(108, 108, 138, 0.15);
  display: flex;
`;

const InputSection = styled.div`
  background-color: #f4f7f9;
  border-radius: 10px;
  padding: 1rem;
`;
const Left = styled.div`
  flex: 1 1 50%;
`;

const Right = styled.div`
  flex: 1 1 50%;
`;
const TopUpPanel: React.FunctionComponent = () => (
  <Wrapper>
    <Left>
      <Strong>TOP UP SUMMARY:</Strong>
      <InputSection>
        <Body4>Select amount to top up</Body4>
      </InputSection>
    </Left>
    <Right>right side</Right>
  </Wrapper>
);

export default TopUpPanel;
