import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'


function Navbar() {
  return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Top navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav me-auto mb-2 mb-md-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
</div>
</nav>
  )
}

const ALK = 'http://localhost:3000/verkkopalveluprojekti/src/alkoholittomat.php'



function App() {

  const [alk, setAlk] = useState([])


    useEffect(getAlk, [])

    function getAlk() {

      axios.get(ALK)
      .then((response) => {
        setAlk(response.data);
      
      }).catch(error => {
        alert(error);
      })
    }

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

      <div >Alkoholittomat</div>

      <ol>
          {alk?.map(alk => (
            <li key={alk.id}> {alk.nimi} Hinta: {alk.hinta} Vahvuus: {alk.alkoholi}</li>
          ))}
        </ol>
      

      <div >Viinit</div>

     <div>Miedot juomat </div>

     
          alk.map(mie => {
          return (<div>  mie.filter(mie.kategoria === 'alkoholittomat').map (kategoria => <p>{mie.nimi}</p>
          
  )}</div>)    
    
        
       

      <div >Vodkat ja viinat</div>

      <div >Liköörit</div>

      <div >Muut</div>


   </div>
   </div>
  );
}




<div >Miedot juomat


</div>

export default App;
