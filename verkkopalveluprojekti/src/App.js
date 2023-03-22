import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Navbar from './components/navbar';
import Products from './pages/products';
import Home from './pages/home';
import {Routes, Route} from 'react-router-dom';




function App() {
  return (
    <>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        </div>
   <Footer />
   </>
  );
}

export default App;
