import styled, { css } from 'styled-components';

const button = css`
  cursor: pointer;
  font-size: 1.5rem;
  border: solid 1.5px ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 15px;
  text-align: center;
  padding: 1rem;
`;

export const MainContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  width: 70rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2.5rem;
`;

export const DetailContainer = styled.div`
  display: flex;
  border: solid 1.5px ${(theme) => theme.text};
  border-radius: 15px;
  padding: 2.5rem 2.5rem;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DetailGrouper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Detail = styled.p`
  font-size: 2rem;
  line-height: 3rem;
`;

export const Change = styled.p`
  ${button}
  margin-left: auto;
  height: fit-content;

  @media (max-width: 400px) {
    margin-left: unset;
    margin-top: 1.5rem;
  }
`;

export const DetailEditorContainer = styled.div`
  display: flex;
  border: solid 1.5px ${(theme) => theme.text};
  align-items: center;
  border-radius: 15px;
  padding: 2.5rem 2.5rem;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DetailEditorGrouper = styled.div`
  display: flex;
  flex-direction: column;
  label:last-of-type {
    margin-top: 1.5rem;
  }
`;

export const EditorLabel = styled.label`
  font-size: 1.8rem;
`;

export const Msg = styled.p`
  font-size: 1.8rem;
  margin-top: 1.5rem;
`;

export const DetailActionGrouper = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 375px) {
    flex-direction: row;
    margin-left: unset;
    margin-top: 1.5rem;
  }
`;

export const Save = styled.p`
  ${button}
  margin-bottom: 1rem;

  @media (max-width: 375px) {
    margin-right: 1rem;
  }
`;
export const Cancel = styled.p`
  height: fit-content;
  ${button}
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
`;

export const PasswordTitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 3rem;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  margin-top: 2rem;
`;

export const Input = styled.input`
  font-size: 1.8rem;
  max-width: 25rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.primary};
`;

export const Update = styled.p`
  ${button}
  max-width: 8rem;
  margin-top: 2rem;
`;
