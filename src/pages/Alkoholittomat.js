


import axios from 'axios';
import React,{useState,useEffect} from 'react';

import { Link, useNavigate } from 'react-router-dom';



export default function Alkoholittomat() {


  const [product, setProduct] = useState(null);

 
  useEffect(() => {
    axios.get('http://localhost:3000/products/getproduct.php/1')
      .then((response) => {
        const json = response.data;
        console.log(response.data)
        setProduct(json);
      }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])


  return (  
    <div>
      <h3>Alkoholiton tuotteemme:</h3> <br></br>
      <h1>{product?.name}</h1>
      <p>{product?.price}</p>
      <p>{product?.koko} l</p>
      <p>{product?.aprosentti} %</p>
      <div><img id="1" src="./assets/välivesi.png" alt='kuva'></img> </div>
    </div>
  )
}