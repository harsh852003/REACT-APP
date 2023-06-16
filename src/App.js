import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
function App() {  
  const [mode,setMode] = useState('light') // it shows the dark mode is enable or not.
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'darkgreen'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'

    }
  }
  return (
  <>
  <Navbar title = 'TextUtils' aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
  <div className="container my-3">

  <TextForm heading = "Enter the Text for Analyse" mode={mode}/>

  {/*<About/>*/}
  </div>

 
  </>
  );
}
export default App;
