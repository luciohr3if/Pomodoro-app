import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.6rem;
`;

export const StyledLeafsDiv = styled.div`
    position: absolute; 
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
`

interface LeafProps {
    small: string;
    top: string;
    left: string;
    rotation: string;
}

export const Leaf = styled.div<LeafProps>`
    width: ${({ small }) => (small ? '5rem' : '7.5rem')};
    height: 2.5rem;
    background-color: green;
    position: absolute;
    top: ${({ top }) => top || '0'};
    left: ${({ left }) => left || '0'};
    border-radius: 50%;
    transform: rotate(${({ rotation }) => rotation || 0}deg);

     @media (max-width: 600px) {
        width: ${({ small }) => (small ? '3.25rem' : '5rem')};
        height: 1.5rem;
    }
`

export const StyledH2Mode = styled.h2`
    font-size: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 4rem;

    @media (max-width: 600px) {
        margin-bottom: 0;
    }
`

export const TomatoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 30rem;
    height: 25rem;
    border: 0.6rem solid #ba2720;
    border-bottom: none;
    background-color: rgba(186, 39, 32, 0.25);

    @media (max-width: 600px) {
        width: 17.5rem;
        height: 15rem;
    }
`

export const TomatoContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        margin-top: auto;
    }
`;

export const StyledCountSpan = styled.span`
    display: block;
    text-align: center;
    margin-top: 4rem; 
    font-size: 1.8rem;
    color: white;
`

export const StyledTimerDiv = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    position: relative;
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
    gap: 1rem;
    position: absolute;
    bottom: -2rem;
`

export const StyledButton = styled.button`
    display: flex;
    color: #ffffff;
    border-radius: 0.6rem;
    border: none;
    outline: none;
    font-weight: bold;
    margin: 0;
    padding: 20px 30px;
    cursor: pointer;
    background-color: ${({theme}) => theme.button};
    align-items: center;

    &:hover {
        background-color: ${({theme}) => theme.buttonHover};
    }

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
    font-weight: bold;
`;