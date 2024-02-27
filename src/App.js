import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/about.js';
import Textform from './components/Textform.js'
import Alert from './components/Alert.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const alo = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
 /*const loude =()=>{
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
 }*/
  const ton = () => {
   // loude();
   // document.body.classList.add('bg-'+cls)
    if (mode === "dark") {
      setmode("light")
      document.body.style.backgroundColor = "white";
      alo("It is light mode", "success");
      //document.title = "textutils-lightmode"
      setInterval(() => {
        document.title = "install textutils now"
      }, 2500);
      setInterval(() => {
        document.title = "watch hentai superfast"
      }, 2000);
    }
    else {
      setmode("dark")
      document.body.style.backgroundColor = "#3c2f48";
      alo("It is dark mode", "danger");
      //document.title = "textutils-darkmode"
    }
  }
  return (
    <>


      <div >
        <Router>
          <Navbar mo={mode} to={ton} />
          <Alert alert={alert} />
          <div className='container my-3'>
            <Routes>
              <Route exact path="/about" element={<About mo={mode} />} />
              <Route exact path="/" element={<Textform heading="Try TextUtils for Fun" mo={mode} alot={alo} />} />
            </Routes>
          </div>
        </Router >

      </div >
    </>
  );
}


export default App;
