import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  background: transparent;
  padding: 0.75rem var(--space-3);
  color: var(--dark-text);
  font-family: inherit;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    border: 1px solid #13273f;
  }
`;

const SecondaryButton: React.FunctionComponent = ({ children }) => (
  <Button>{children}</Button>
);

export default SecondaryButton;
