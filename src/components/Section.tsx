import styled from 'styled-components';

const Section = styled.section`
  height: calc(100vh - 5rem * 2);
  padding: 5rem calc((100vw - 800px) / 2);
  flex-wrap: wrap;
  background-color: #f4f7f9;
  @media (max-width: 900px) {
    height: calc(100vh - 3rem * 2);
    padding: 3rem var(--space-2);
  }
`;
export default Section;
