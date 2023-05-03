import axios from 'axios';
import React,{useState,useEffect} from 'react';

import { Link} from 'react-router-dom';
export default function Home() {

  const [categories,setCategories] = useState([]);
 
  

  useEffect(() => {
    axios.get('http://localhost:3000/products/getcategories.php')
      .then((response) => {
        const json = response.data;
      
        setCategories(json);
      }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])
  return (
    <>
    <h3>Tervetuloa Ryyst-verkkokkauppaan!</h3>
    <img src="/src/assets/alcohol-gb76d9e301_1920.png" alt='Ryyst'></img>

<br></br>

<br></br>
<br></br>

    <h5> Kategoriamme:</h5>
   <p>
                  <li className="nav-item">
                  <Link className="nav-link" to="/alkoholittomat">Alkoholittomat</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/miedot">Miedot</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/vahvat">Vahvat</Link>
                </li>
               
                 </p> 
    </>



  )
}
