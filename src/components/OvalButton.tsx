import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #38b6ff;
  border-radius: 20px;
  padding: var(--space-1) var(--space-2);
  background-color: #38b6ff3b;
  color: #38b6ff;
  cursor: pointer;
`;

interface OvalButtonProps {
  onClick?: () => void;
}

const OvalButton: React.FunctionComponent<OvalButtonProps> = ({
  children,
  onClick,
}) => <Button onClick={onClick}>{children}</Button>;

export default OvalButton;
