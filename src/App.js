import './App.css';
import Audiolist from './components/Audiolist';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center '>
      <Audiolist/>
    </div>
    </>
  );
}

export default App;
