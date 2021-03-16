import styled from 'styled-components';
import { ReactComponent as downArrow } from '../../assets/down-arrow.svg';

export const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
  position: relative;
  cursor: pointer;
`;

export const ThemeTitle = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
  margin-right: 1rem;
`;

export const ThemeOptionPopup = styled.div`
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

  p:last-of-type {
    border-bottom: none;
  }
`;

export const ThemeOption = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  padding: 0.7rem 2rem;
  width: 100%;
  border-bottom: solid 1.5px ${({ theme }) => theme.secondary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const DownArrow = styled(downArrow)`
  fill: ${({ theme }) => theme.text};
  width: 2rem;
  height: 2rem;
`;
