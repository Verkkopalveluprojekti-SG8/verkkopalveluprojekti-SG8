import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/navbar';




const URL = 'http://localhost:3000/verkkopalveluprojekti/src/index.php'


function App() {

  const [miedot, setMiedot] = useState([])


    useEffect(getMiedot, [])

    function getMiedot() {

      axios.get(URL)
      .then((response) => {
        setMiedot(response.data);
      
      }).catch(error => {
        alert(error);
      })
    }

  return (
    <>
    <Navbar />

    <div class="image">
      <img src='kuvat\alcohol-gb76d9e301_1920.png' alt='alcohol'></img>
      <div class="ryyst">RYYST</div>
    </div>

    <div>
       
        <div class="header">

          <h4>"Ryyst and Jyyst"</h4>
        </div>

        <p class="container">
          Tervetuloa Ryyst:in verkkokauppaan! Täältä pystyt tekemään tarvittavat juomaostokset tuleviin juhliin, viikonlopulle tai vaikkapa ihan vain itsellesi.
        </p>



        <div class="categories">
          
          <a class="c" href="https://www.oispakaljaa.com/">Alkoholittomat</a>
          
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
      </div>
      </>
  );
}



export default App;
