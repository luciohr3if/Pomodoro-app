import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TomatoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 30rem;
    height: 25rem;
    border: 0.6rem solid #ba2720ff;
    border-bottom: none;
    background-color: rgba(223, 76, 76, 0.1);
`

export const StyledTimerDiv = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-top: auto;
`

export const StyledBtnsDiv = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0;
    margin: 0;
    gap: 0.6rem;
`

export const StyledButton = styled.button`
    color: #ffffff;
    border-radius: 0.6rem;
    padding: 0.6em 1.2em;
    border: none;
    font-size: 2em;
    outline: none;
    font-weight: 500;
    cursor: pointer;
    background-color: #014F86;

    @media (max-width: 600px) {
        font-size: 1.25rem;
    }
`


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