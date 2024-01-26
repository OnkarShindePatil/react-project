import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';
import Alert from './components/Alert';
import Practice from './components/Practice'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom'


function App() {

  const [mode, setMode] = useState('light');  // it represents whether dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  //  function for togglemode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0b3157';
      showAlert("Dark Mode Enabled", "success")

      // for dynamic title

      // setInterval(() => {
      //   document.title = 'textUtil is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'install textUtils now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success ")
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText='TextUtils' /> */}
      {/* {Navbar/} */}
      {/* <Router> */}


      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />          ****** */}
      {/* <Alert alert={alert} />            ************ */}
      {/* <div className="container my-3">      ************* */}
        {/* 
          <Routes>
            <Route exact path='/' element={ }>
            </Route> */}
        {/* <TextForm showAlert={showAlert} heading="Enter the Text to Analyse below" mode={mode} />     *********** */}
        {/* <Navbar/>       **************** */}

        {/* <Route exact path='about' element={<About />}> */}

        {/* </Route> */}
        {/* </Routes> */}

      {/* </div>    *********** */}
      {/* </Router> */}
      <Practice/>
    </>

  );
}

export default App;
