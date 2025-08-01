import Tooltip from "@mui/material/Tooltip"
import { StyledBtnsDiv, StyledButton } from "../styles/styled_components"
import { StyledPauseIcon, StyledPlayArrowIcon, StyledRestartAltIcon } from "../Icons/icons"

const Buttons = (
    {   isRunning,
        handleStartPause,
        handleReset }
    ) => {
    return (
        <StyledBtnsDiv>
            <Tooltip title={isRunning ? "Pause" : "Start"}>
                <StyledButton onClick={() => handleStartPause()}>{isRunning ? (<StyledPauseIcon/>) : (<StyledPlayArrowIcon/>)}</StyledButton>    
            </Tooltip>
            <Tooltip title="Reset">
                <StyledButton onClick={() => handleReset()}><StyledRestartAltIcon /></StyledButton>
            </Tooltip>
        </StyledBtnsDiv>
    )
}
export default Buttons