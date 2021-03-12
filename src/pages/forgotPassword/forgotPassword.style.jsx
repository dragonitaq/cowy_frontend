import styled from 'styled-components';
import { ReactComponent as CowyLogo } from '../../assets/logo.svg';

export const ForgotPasswordFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem;
`;

export const ForgotPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;

  & > * {
    margin-bottom: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled(CowyLogo)`
  width: 3rem;
`;
export const CompanyName = styled.h1`
  font-size: 5rem;
`;
export const Title = styled.h2`
  font-size: 2.5rem;
`;

export const EmailInput = styled.input`
  min-width: 20rem;
`;

export const ForgotPasswordButton = styled.button`
  min-width: 10rem;
`;

export const SubmittedMsg = styled.p`
  font-size: 1.5rem;
  display: inline-block;
  text-align: center;
  margin-top: 2.5rem;
`;
