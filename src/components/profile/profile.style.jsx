import styled from 'styled-components';
import { ReactComponent as downArrow } from '../../assets/down-arrow.svg';

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 2rem;
  cursor: pointer;
`;

export const ProfileName = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 20ch;
`;

export const DownArrow = styled(downArrow)`
  fill: ${({ theme }) => theme.text};
  width: 2rem;
`;
