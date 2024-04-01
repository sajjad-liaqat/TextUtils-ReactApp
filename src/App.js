import './App.css';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(false);
  const [alert, setAlert] = useState(null);
  const appName = "TextUtils";

  //Null Alert After One Second
  setTimeout(() => {
    setAlert(null);
  }, 1000);

  //Add DarkMode
  const [style, setStyle] = useState({
    backgroundColor: 'white',
    color: 'black'
  });
  const toggleDarkMode = (event) => {
    if (event.target.checked) {
      setStyle({
        backgroundColor: 'black',
        color: 'white'
      });
      setMode(event.target.checked);
      document.body.style.backgroundColor = 'black';
      setAlert({
        type: 'success',
        msg: 'Dark Mode On'
      });
      //Change Title of Document
      document.title = appName + '  - Dark Mode';

    } else {
      setStyle({
        backgroundColor: 'white',
        color: 'black'
      });
      setMode(event.target.checked);
      document.body.style.backgroundColor = 'white';
      setAlert({
        type: 'success',
        msg: 'Dark Mode off'
      });
      //Change Title of Document
      document.title = appName + '  - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title={appName} mode={mode} toggleMode={toggleDarkMode} style={style} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextEditor title={appName} mode={mode} alert={setAlert} style={style} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
