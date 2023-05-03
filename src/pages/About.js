

import axios from 'axios';
import React,{useState,useEffect} from 'react';

import { Link, useNavigate } from 'react-router-dom';



export default function About({}) {


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
      <h3>Products for </h3>
      <h3>{product?.name}</h3>
      <p>{product?.price}</p>
      <img src="src\assets\välivesi.png" alt='kuva'></img>
    </div>
  )
}