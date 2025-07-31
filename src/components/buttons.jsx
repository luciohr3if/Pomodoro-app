import Tooltip from "@mui/material/Tooltip"
import { StyledBtnsDiv, StyledButton } from "../styles/styled_components"
import { StyledPauseIcon, StyledPlayArrowIcon, StyledRestartAltIcon } from "../Icons/icons"

const Buttons = () => {
    return (
        <StyledBtnsDiv>
            <Tooltip title="Start">
                <StyledButton><StyledPlayArrowIcon/></StyledButton>
            </Tooltip>
            <Tooltip title="Pause">
                <StyledButton><StyledPauseIcon /></StyledButton>    
            </Tooltip>
            <Tooltip title="Reset">
                <StyledButton><StyledRestartAltIcon /></StyledButton>
            </Tooltip>
        </StyledBtnsDiv>
    )
}
export default Buttons