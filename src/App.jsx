
import './App.css'
import Buttons from './components/buttons'
import Footer from './components/footer'
import TimerComponent from './components/timer'

function App() {

  return (
      <div>
        <h1>Pomodoro App</h1>
        <TimerComponent />
        <Buttons />
        <Footer />
      </div>
  )
}

export default App
