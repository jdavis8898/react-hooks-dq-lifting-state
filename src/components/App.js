import React, {useState} from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function onToggleDarkMode()
  {
    setDarkMode((darkMode)=>!darkMode)
  }
  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header 
      onToggleDarkMode={onToggleDarkMode}
      darkMode={darkMode}
      />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
