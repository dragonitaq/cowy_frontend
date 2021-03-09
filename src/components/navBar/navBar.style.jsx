import styled from 'styled-components';
import { ReactComponent as CowyLogo } from '../../assets/logo.svg';

export const NavBarContainer = styled.nav`
  display: flex;
  padding: 2.5rem;
  align-items: center;

  & :nth-child(3) {
    margin-left: auto;
  }
`;

export const Logo = styled(CowyLogo)`
  width: 3rem;
`;

export const CompanyName = styled.h1`
  font-size: 5rem;
`;
