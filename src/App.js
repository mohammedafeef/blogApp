
import './App.css';
import {Navbar,Home} from './components/index.js';
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";

const App= ()=> {
  return (
    <div className="container">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
