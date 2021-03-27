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
  border-radius: 10px;
  border: solid 1.5px ${({ theme }) => theme.secondary};
  z-index: 1;

  a:last-of-type {
    border-bottom: none;
    border-radius: 0 0 8px 8px;
  }
  a:first-of-type {
    border-radius: 8px 8px 0 0;
  }
`;

export const ContainerLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  padding: 0.7rem 2rem;
  width: 100%;
  border-bottom: solid 1.5px ${({ theme }) => theme.secondary};
  transition: background-color 0.2s;

  // No idea why there is issue when animate font color. Changed to animate background-color.
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  &:visited {
    color: ${({ theme }) => theme.text};
  }
`;
