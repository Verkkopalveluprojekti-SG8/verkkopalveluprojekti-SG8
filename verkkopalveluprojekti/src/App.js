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
    <div>
      <div  class="logo">
        <h1>RYYST</h1>
      </div>


    <div class="header">


    <input class="searchbar" type="text" placeholder="Search.."></input>

    <h4>"Ryyst and Jyyst"</h4>
      </div>
      


   <div class="categories">

      <a class="c" href="https://www.oispakaljaa.com/">Alkoholittomat</a>

      <a class="c" href="https://www.oispakaljaa.com/">Viinit</a>

      <a class="c" href="https://www.oispakaljaa.com/">Miedot juomat</a>

      <a class="c" href="https://www.oispakaljaa.com/">Vodkat ja viinat</a>

      <a class="c" href="https://www.oispakaljaa.com/">Liköörit</a>

      <a class="c" href="https://www.oispakaljaa.com/">Muut</a>


   </div>
   </div>
  );
}

export default App;
