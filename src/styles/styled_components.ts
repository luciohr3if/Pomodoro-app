import styled from 'styled-components'

export const StyledBtnsDiv = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    gap: 0.6rem;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const BaseButton = styled.button`
    color: #ffffff;
    border-radius: 50%;
    padding: 0.6em 1.2em;
    border: none;
    font-size: 2em;
    outline: none;
    font-weight: 500;
    cursor: pointer;

    @media (max-width: 600px) {
        font-size: 1.25rem;
    }
`

export const PauseButton = styled(BaseButton)`
    background-color: #c61f2aff;

    &:hover {
        background-color: #a20a0a;
    }
`

export const StartButton = styled(BaseButton)`
  background-color: #3f751bff;

  &:hover {
      background-color: #335b18ff;
    }
`;

export const ResetButton = styled(BaseButton)`
  background-color: #1665afff;

  &:hover {
      background-color: #08559d;
    }
`;

export const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #343A40;
    gap: 7.5rem;
    height: 3.125rem;

    @media (max-width: 600px) {
        gap: 4rem;
    }
`

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.469rem;
  color: #ffffff;
`;