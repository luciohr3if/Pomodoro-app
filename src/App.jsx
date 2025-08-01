
import { useEffect, useRef, useState } from 'react'
import Buttons from './components/buttons'
import Footer from './components/footer'
import TimerComponent from './components/timer'
import GlobalStyle from './styles/GlobalStyle'
import { MainDiv, StyledCountSpan, TomatoContainer } from './styles/styled_components'

function App() {
  const FOCUS_TIME = 0.5 * 60;      // 25 minutos
  const SHORT_BREAK = 5 * 60;      // 5 minutos
  const LONG_BREAK = 15 * 60;      // 15 minutos
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("focus"); // focus | shortBreak | longBreak
  const [cycleCount, setCycleCount] = useState(0);
  const timerRef = useRef(null);

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      clearInterval(timerRef.current);
      setIsRunning(false);
      handleNextSession();
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, timeLeft]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setMode("focus");
    setTimeLeft(FOCUS_TIME);
    setCycleCount(0);
  };

  const handleNextSession = () => {
    if (mode === "focus") {
      const newCount = cycleCount + 1;
      setCycleCount(newCount);

      if (newCount % 4 === 0) {
        setMode("longBreak");
        setTimeLeft(LONG_BREAK);
      } else {
        setMode("shortBreak");
        setTimeLeft(SHORT_BREAK);
      }
    } else {
      setMode("focus");
      setTimeLeft(FOCUS_TIME);
    }
  };

  return (
      <MainDiv>
        <GlobalStyle />
        <h2 style={{marginTop: "2rem", marginBottom: "7rem"}}>{mode === "focus" ? "🔴 Focus" : mode === "shortBreak" ? "🟢 Short Break" : "🔵 Long Break"}</h2>
        <TomatoContainer>
          <TimerComponent timer={formatTime(timeLeft)}/>
          <Buttons isRunning={isRunning} handleStartPause={handleStartPause} handleReset={handleReset} />
        </TomatoContainer>
        <StyledCountSpan>Ciclos completos: {cycleCount}</StyledCountSpan>
        <Footer />
      </MainDiv>
  )
}

export default App
