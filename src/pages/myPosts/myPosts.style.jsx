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
`;
