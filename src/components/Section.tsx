import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  padding: 5rem calc((100vw - 700px) / 2);
  flex-wrap: wrap;
  background-color: #f4f7f9;
  @media (max-width: 900px) {
    padding: 3rem var(--space-2);
  }
`;
export default Section;
