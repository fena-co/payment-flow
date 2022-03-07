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
  loading?: boolean;
  minHeight?: number;
}

const LoadingBlock: FC<LoadingBlockProps> = ({
  children,
  loading,
  minHeight = 200,
}) => {
  if (loading)
    return (
      <Wrapper minHeight={minHeight}>
        <Spinner width={50} height={50} />
      </Wrapper>
    );

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default LoadingBlock;
