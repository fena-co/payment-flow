import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #38b6ff;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  background-color: #38b6ff3b;
  color: #38b6ff;
`;

const OvalButton: React.FunctionComponent = ({ children }) => (
  <Button>{children}</Button>
);

export default OvalButton;
