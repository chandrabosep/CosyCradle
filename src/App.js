import './App.css';
import Audiolist from './components/Audiolist';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className='flex justify-center '>
      <Audiolist/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
