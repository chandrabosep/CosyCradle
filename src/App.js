import './App.css';
import Audiolist from './components/Audiolist';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Audiolist/>
    <div className='flex justify-center absolute inset-x-0 bottom-0'>
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
