import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path='/about' Component={About}/>
        </Routes>  
        <Footer/>
    </Router>
  );
}

export default App;
