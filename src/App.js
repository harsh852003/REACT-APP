import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
{/*import About from './components/about';*/}
function App() {  
  return (
  <>
  <Navbar title = 'TextUtils' aboutText="About"/>
  <div className="container my-3">

  <TextForm heading = ""/>

  {/*<About/>*/}
  </div>

 
  </>
  );
}
export default App;
