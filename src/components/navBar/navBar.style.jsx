import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as CowyLogo } from '../../assets/logo.svg';

const anchorStyle = css`
  font-size: 2rem;
  margin-right: 4rem;
  text-decoration: none;
  text-transform: uppercase;
  &:visited {
    color: ${({ theme }) => theme.text};
  }
`;

export const NavBarContainer = styled.nav`
  display: flex;
  padding: 0.5rem 2.5rem;
  align-items: center;

  & div:nth-child(3) {
    margin-left: auto;
  }
`;

export const Logo = styled(CowyLogo)`
  width: 3rem;
  cursor: pointer;
`;

export const CompanyName = styled.h1`
  font-size: 5rem;
  cursor: pointer;
`;

export const Anchor = styled(Link)`
  ${anchorStyle}
`;
