import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(30rem, 1fr));
  gap: 3rem;
  padding: 2.5rem 5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(30rem, 1fr));
  }
  @media (max-width: 725px) {
    padding: 2.5rem 2.5rem;
    gap: 1.5rem;
  }
  @media (max-width: 575px) {
    grid-template-columns: minmax(30rem, 1fr);
    padding: 2rem 2rem;
    gap: 1.5rem;
  }
`;

export const NoData = styled.p`
  font-size: 2.5rem;
  padding: 2.5rem;
`;
