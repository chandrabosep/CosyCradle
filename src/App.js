import './App.css';
import Audiolist from './components/Audiolist';
import Header from './components/Header';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className='flex justify-center '>
      <Audiolist/>
    </div>
    </>
  );
}

export default App;
