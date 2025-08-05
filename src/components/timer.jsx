import { Leaf, StyledH1Timer, StyledLeafsDiv, StyledTimerDiv, TomatoDiv } from "../styles/styled_components"

const TimerComponent = ({timer}) => {
    return (
        <StyledTimerDiv>
            <StyledLeafsDiv>
                <Leaf $rotation={-160} $left="51%" $top="7%" />
                <Leaf $rotation={-20} $left="25%" $top="7%" />
                <Leaf $rotation={-90} $left="42%" $top="10%" $small />
                <Leaf $rotation={-160} $left="30%" $top="-5%" />
                <Leaf $rotation={-20} $left="47%" $top="-5%" />
            </StyledLeafsDiv>
            <TomatoDiv>
                <StyledH1Timer>{timer}</StyledH1Timer>
            </TomatoDiv>
        </StyledTimerDiv>
    )
}
export default TimerComponent