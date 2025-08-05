
import { useEffect, useRef, useState } from 'react'
import Buttons from './components/buttons'
import Footer from './components/footer'
import TimerComponent from './components/timer'
import GlobalStyle from './styles/GlobalStyle'
import { MainDiv, StyledCountSpan, StyledH2Mode, TomatoContainer } from './styles/styled_components'
import { ThemeProvider } from 'styled-components'
import { focusTheme, longBreakTheme, shortBreakTheme } from './themes'

function App() {
  const FOCUS_TIME = 0.05 * 60;      
  const SHORT_BREAK = 0.05 * 60;     
  const LONG_BREAK = 0.05 * 60;   
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState("focus");
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
    if (isRunning) {
      setIsPaused(true)
    } else {
      setIsPaused(false)
    }

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

   const getTheme = () => {
    switch (mode) {
      case "shortBreak":
        return shortBreakTheme;
      case "longBreak":
        return longBreakTheme;
      default:
        return focusTheme;
    }
  };

  const getModeLabel = () => {
  if (isPaused) return "PAUSED";

  switch (mode) {
    case "shortBreak":
      return "SHORT BREAK";
    case "longBreak":
      return "LONG BREAK";
    default:
      return "FOCUS";
  }
};

  return (
    <ThemeProvider theme={getTheme}>
      <MainDiv>
        <GlobalStyle />
        <StyledH2Mode>{getModeLabel()}</StyledH2Mode>
        <TomatoContainer>
          <TimerComponent timer={formatTime(timeLeft)}/>
          <Buttons isRunning={isRunning} handleStartPause={handleStartPause} handleReset={handleReset} />
        </TomatoContainer>
        <StyledCountSpan>Complete cycles: {cycleCount}</StyledCountSpan>
        <Footer />
      </MainDiv>
    </ThemeProvider>
  )
}

export default App
