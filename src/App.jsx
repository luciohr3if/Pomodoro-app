
import './App.css'
import Buttons from './components/buttons'
import TimerComponent from './components/timer'
import GlobalStyle from './styles/GlobalStyle'

function App() {

  return (
      <div>
        <GlobalStyle />
        <TimerComponent />
        <Buttons />
      </div>
  )
}

export default App
