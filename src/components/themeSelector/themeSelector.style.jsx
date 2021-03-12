import styled from 'styled-components';

export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2.5rem;
`;

export const ThemeTitle = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
`;

export const ThemeSelectionContainer = styled.div`
  display: flex;
`;

//  Not applicable at the moment
export const ThemeSelectionWrapper = styled.div`
  margin: 0.7rem;
`;

export const ThemeSelection = styled.input`
  margin-right: 0.5rem;
`;

export const ThemeLabel = styled.label`
  margin-right: 1rem;
  /* display: none; */
`;
