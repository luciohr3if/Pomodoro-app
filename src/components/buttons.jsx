import Tooltip from "@mui/material/Tooltip"
import { PauseButton, ResetButton, StartButton, StyledBtnsDiv } from "../styles/styled_components"
import { StyledPauseIcon, StyledPlayArrowIcon, StyledRestartAltIcon } from "../Icons/icons"

const Buttons = () => {
    return (
        <StyledBtnsDiv>
            <Tooltip title="Start">
                <StartButton><StyledPlayArrowIcon/></StartButton>
            </Tooltip>
            <Tooltip title="Pause">
                <PauseButton><StyledPauseIcon /></PauseButton>    
            </Tooltip>
            <Tooltip title="Reset">
                <ResetButton><StyledRestartAltIcon /></ResetButton>
            </Tooltip>
        </StyledBtnsDiv>
    )
}
export default Buttons