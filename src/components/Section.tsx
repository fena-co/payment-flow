import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem calc((100vw - 1200px) / 2);
  flex-wrap: wrap;
  background-color: #f4f7f9;
  @media (max-width: 1200px) {
    padding: 5rem 2rem;
  }
`;
export default Section;
