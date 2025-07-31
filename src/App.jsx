
import Buttons from './components/buttons'
import Footer from './components/footer'
import TimerComponent from './components/timer'
import GlobalStyle from './styles/GlobalStyle'
import { MainDiv } from './styles/styled_components'

function App() {

  return (
      <MainDiv>
        <GlobalStyle />
        <TimerComponent />
        <Buttons />
        <Footer />
      </MainDiv>
  )
}

export default App
