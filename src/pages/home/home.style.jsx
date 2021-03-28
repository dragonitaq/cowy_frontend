import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
`;

export const Description = styled.h2`
  font-size: 2.2rem;
  margin-top: 1rem;
`;

export const Form = styled.form`
  display: flex;
  margin: 2.5rem 0 1.5rem;
`;

export const Search = styled.input`
  font-size: 2rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.primary};
  margin-right: 0.5rem;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  border: solid 1.5px ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 15px;
  text-align: center;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoData = styled.p`
  font-size: 2.5rem;
  padding: 2.5rem;
`;

export const PostPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(30rem, 1fr));
  gap: 3rem;
  padding: 2.5rem 5rem;
`;
