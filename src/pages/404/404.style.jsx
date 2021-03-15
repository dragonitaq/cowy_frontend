import styled from 'styled-components';
import { Link } from 'react-router-dom';

import dog from '../../assets/404.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
`;

export const NotFoundImg = styled.image`
  background-image: url(${dog});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40rem;
  height: 40rem;
`;

export const Title = styled.h1`
  font-size: 5rem;
`;

export const Description = styled.p`
  font-size: 1.5rem;
`;

export const Back = styled(Link)`
  font-size: 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  border: solid 1.5px ${({ theme }) => theme.secondary};
  padding: 0.5rem 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
