import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: #13273f;
  color: white;
`;

const ButtonRound: React.FunctionComponent = ({ children }) => (
  <Button>{children}</Button>
);

export default ButtonRound;
