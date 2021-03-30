import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50rem;
  margin-bottom: 2.5rem;
`;

export const Label = styled.label`
  font-size: 2.2rem;
`;

export const Input = styled.input`
  font-size: 2rem;
  max-width: 50%;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.primary};
  
  @media (max-width: 450px) {
    max-width: 70%;
  }
  @media (max-width: 400px) {
  }
`;

export const Publish = styled.button`
  cursor: pointer;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
  width: fit-content;
  border: solid 1.5px ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 15px;
`;
