import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 150%;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--dark-text);
`;

export const H2 = styled.h2`
  font-size: 120%;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--dark-text);
`;

export const P = styled.p`
  color: var(--dark-text);
`;

export const Label = styled.label`
  color: var(--light-text);
  font-size: 80%;
  font-weight: 500;
  margin-bottom: var(--space-1);
  display: block;
  text-transform: uppercase;
`;

export const LabelLowerCase = styled(Label)`
  text-transform: none;
  font-weight: 400;
  font-size: 100%;
`;

export const SmallP = styled(P)`
  font-size: 80%;
`;

export const Strong = styled(P)`
  font-weight: bold;
  display: inline;
`;

export const Subtitle = styled(P)`
  font-size: 22px;
  font-weight: 600;
`;
