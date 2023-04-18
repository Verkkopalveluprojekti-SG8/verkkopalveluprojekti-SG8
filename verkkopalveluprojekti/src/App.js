import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/navbar';
import alkoholittomat from './components/alkoholittomat';



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
    <>
    <Navbar />
    <div>
        <div class="logo">
          <h1>RYYST</h1>
        </div>


        <div class="header">


          <input class="searchbar" type="text" placeholder="Search.."></input>

          <h4>"Ryyst and Jyyst"</h4>
        </div>


        

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
        <div class="categories">
        
          <alkoholittomat nimi="Alkoholittomat"/>
          
          <a class="c" href="https://www.oispakaljaa.com/">Viinit</a>

          <a class="c" href="https://www.oispakaljaa.com/">Miedot juomat
            <ol>
              {miedot?.map(miedot_juomat => (
                <li key={miedot_juomat.id}>{miedot_juomat.alcohol}</li>
              ))}
            </ol>

          </a>

          <a class="c" href="https://www.oispakaljaa.com/">Vodkat ja viinat</a>

          <a class="c" href="https://www.oispakaljaa.com/">Liköörit</a>

          <a class="c" href="https://www.oispakaljaa.com/">Muut</a>


        </div>
      </div></>
  );
}




<div >Miedot juomat


</div>

export default App;
