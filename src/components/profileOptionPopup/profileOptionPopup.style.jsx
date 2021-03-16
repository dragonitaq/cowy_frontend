import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: max-content;
  position: absolute;
  top: 3rem;
  right: 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 8%;
  border: solid 1.5px ${({ theme }) => theme.secondary};

  a:last-of-type {
    border-bottom: none;
  }
`;

export const ContainerLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  padding: 0.7rem 2rem;
  width: 100%;
  border-bottom: solid 1.5px ${({ theme }) => theme.secondary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  &:visited {
    color: ${({ theme }) => theme.text};
  }
`;
