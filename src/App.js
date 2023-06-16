import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import Alert from './components/alert';

function App() {  
  const [mode,setMode] = useState('light') // it shows the dark mode is enable or not.
  const[alert,setAlert] = useState(null) 

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout (()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'darkgreen'
      showAlert("Dark mode is on","sucess")      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is on","success")
    }
  }
  return (
  <>
  <Navbar title = 'TextUtils' aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
  <Alert alert = {alert}/>
  <div className="container my-3">

  <TextForm showAlert ={showAlert} heading = "Enter the Text for Analyse" mode={mode}/>

  {/*<About/>*/}
  </div>
  

 
  </>
  );
}
export default App;
