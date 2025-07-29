import { StyledFooter, StyledSpan } from "../styles/styled_components"

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <StyledFooter>
            <StyledSpan>
                <a href="https://github.com/luciohr3if" target="_blank">luciohr3if</a>
            </StyledSpan>    
            <StyledSpan>© {date}</StyledSpan>
        </StyledFooter>
    )
}
export default Footer