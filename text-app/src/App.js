
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Alert from './components/Alert';

// import About from './components/About'; 

function App() {
  const [mode, setMode] = useState('light');
  const [textDark, setTextDark] = useState("dark");
  const [darkText, setDarkText] =useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  // const [title, setTitle] = useState("light mode")
  
  const toggleMode = () =>{
    let rootElement = document.getElementById("root");
    let textArea = document.getElementById("textarea");
    (mode==="light"? setMode("dark"):setMode("light"));

    (mode==="light"? showAlert("Dark Mode Enabled"): showAlert("Light Mode Enabled"));
    (mode==="light"? document.title = "Text-App -darkMode": document.title = "Text-App");
    (mode === "light"? rootElement.style.backgroundColor ="#2e323f": rootElement.style.backgroundColor ="white");
    (mode==="light"? textArea.style.backgroundColor = "#919090": textArea.style.backgroundColor = "white");

    (textDark==="dark"? setTextDark("light"): setTextDark("dark"));
    (textDark === "dark"? setDarkText("Enable Light Mode"): setDarkText("Enable Dark Mode"));
  }
  const showAlert = (message) =>{
    setAlert({
      msg: message,
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1200);
  }
  return (
  <>
  <Navbar mode={mode} darkText={darkText} toggleMode={toggleMode} textDark={textDark}/>
  <Home mode={mode} toggleMode={toggleMode} textDark={textDark}/>
  {/* <About mode={mode} darkText={darkText} toggleMode={toggleMode} textDark={textDark} /> */}
  <Alert alert={alert} showAlert={showAlert}/>
 
  </>
  );
}

export default App;
