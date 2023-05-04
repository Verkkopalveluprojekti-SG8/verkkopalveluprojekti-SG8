


import axios from 'axios';
import React,{useState,useEffect} from 'react';

import { Link, useNavigate } from 'react-router-dom';



export default function Vahvat() {


  const [product, setProduct] = useState(null);

 
  useEffect(() => {
    axios.get('http://localhost:3000/products/getproduct.php/3')
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
      <h3>Vahva tuotteemme:</h3> <br></br>
      <h1>{product?.name}</h1>
      <p>{product?.price} €</p>
      <p>{product?.koko} l</p>
      <p>{product?.aprosentti} %</p>
      <img src="src\assets\votka.png" alt='kuva'></img>
    </div>
  )
}