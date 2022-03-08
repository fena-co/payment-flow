import React, { FC } from 'react';
import styled from 'styled-components';
import { Spinner } from './index';

const Wrapper = styled.div<{ minHeight: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ minHeight }) => minHeight}px;
`;

export interface LoadingBlockProps {
  minHeight?: number;
}

const LoadingBlock: FC<LoadingBlockProps> = ({ minHeight = 200 }) => (
  <Wrapper minHeight={minHeight}>
    <Spinner width={50} height={50} />
  </Wrapper>
);

export default LoadingBlock;
