import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";

function App() {
        const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not
        const [alert, setAlert] = useState(null);
        const showAlert=(message, type)=>{
        setAlert({
          msg: message,
          type: type 
        })
      { /* window.setTimeout=(()=>{
          setAlert(null);
        },2000);*/}
      }
      const removeBodyClasses=()=>{
        document.body.classList.remove('bg-light')
        document.body.classList.remove('bg-dark')
        document.body.classList.remove('bg-waiting')
        document.body.classList.remove('bg-danger')
        document.body.classList.remove('bg-success')
      }
        const toggleMode=(cls)=> {
          removeBodyClasses();
          console.log(cls)
          document.body.classList.add('bg-'+cls)
        if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='#051762';
        showAlert("Dark mode has been enabled","success");
        }
        else {
          setMode('light');
          document.body.style.backgroundColor='white';
          showAlert("Light mode has been enabled","success");
        }
      }
      return(
        <>
        <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert}></Alert>
      <div className='container my-3' >
      <Routes>
          <Route exact path = "/about" element = {<About  mode={mode}/>}></Route>
          <Route exact path = "/" element = {<TextForm showAlert={showAlert} heading='Try TextUtils - word counter, character counter, remove extra spaces' mode={mode} />}></Route>
      </Routes>
      </div>
    </Router>
      </>
);

}

export default App;
