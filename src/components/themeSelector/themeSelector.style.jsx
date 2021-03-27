import styled from 'styled-components';
import { ReactComponent as DownArrowSVG } from '../../assets/down-arrow.svg';

export const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const ThemeTitle = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
  margin-right: 0.3rem;
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
  border-radius: 10px;
  border: solid 1.5px ${({ theme }) => theme.secondary};
  z-index: 1;

  p:last-of-type {
    border-bottom: none;
    border-radius: 0 0 8px 8px;
  }
  p:first-of-type {
    border-radius: 8px 8px 0 0;
  }
`;

export const DownArrow = styled(DownArrowSVG)`
  fill: ${({ theme }) => theme.text};
  width: 2rem;
  height: 2rem;
  transform: ${({ showThemeOptionPopup }) => (showThemeOptionPopup ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`;

export const ThemeOption = styled.p`
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
`;
