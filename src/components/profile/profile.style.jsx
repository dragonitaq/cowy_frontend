import styled from 'styled-components';
import { ReactComponent as DownArrowSVG } from '../../assets/down-arrow.svg';

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 4rem;
  cursor: pointer;

  @media (max-width: 450px) {
    margin-right: 1.5rem;
  }
`;

export const ProfileName = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
  margin-right: 0.3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 20ch;

  @media (max-width: 550px) {
    font-size: 1.6rem;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const DownArrow = styled(DownArrowSVG)`
  fill: ${({ theme }) => theme.text};
  width: 2rem;
  height: 2rem;
  transform: ${({ showProfileOptionPopup }) => (showProfileOptionPopup ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`;
