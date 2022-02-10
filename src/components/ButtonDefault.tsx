/* eslint-disable react/require-default-props */
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: rgb(19, 39, 63);
  background-size: cover;
  border-radius: 5px;
  padding: ${(props) =>
    props[`aria-atomic`] ? `0.5rem 1rem` : `0.75rem 2rem`};
  color: white;
  font-weight: bolder;
  transition: 200ms;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(25, 56, 93);
  }
`;

export const StyledButtonWhite = styled(StyledButton)`
  background-color: rgb(255, 255, 255);
  color: #13273f;
  border: 1px solid #dbe3eb;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  background-color: rgb(19, 39, 63);
  border-radius: 5px;
  font-size: 14px;
  padding: ${(props) =>
    props[`aria-atomic`] ? `0.5rem 1rem` : `0.75rem 2rem`};
  color: white;
  font-weight: bolder;
  transition: 200ms;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(25, 56, 93);
  }
`;

export const StyledLinkWhite = styled(StyledLink)`
  background-color: rgb(255, 255, 255);
  color: #13273f;
  border: 1px solid #dbe3eb;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  white?: boolean;
  small?: boolean;
  withImage?: boolean;
  to?: string;
}
const ButtonDefault: React.FunctionComponent<ButtonProps> = ({
  children,
  white,
  small,
  withImage,
  to,
  ...rest
}) => {
  if (to) {
    return white ? (
      <StyledLinkWhite
        {...rest}
        to={to}
        aria-atomic={small}
        style={withImage && { padding: 0, background: `none`, width: `10rem` }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </StyledLinkWhite>
    ) : (
      <StyledLink
        {...rest}
        to={to}
        aria-atomic={small}
        style={withImage && { padding: 0, background: `none`, width: `10rem` }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </StyledLink>
    );
  }
  return white ? (
    <StyledButtonWhite
      {...rest}
      aria-atomic={small}
      style={withImage && { padding: 0, background: `none`, width: `10rem` }}
    >
      {children}
    </StyledButtonWhite>
  ) : (
    <StyledButton
      {...rest}
      aria-atomic={small}
      style={withImage && { padding: 0, background: `none`, width: `10rem` }}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonDefault;
