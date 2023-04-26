
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


const URL = 'http://localhost:3000/verkkopalveluprojekti/src/getProducts.php'

export default function Product() {

    const [product, setProduct] = useState(null)
  
  
    let params = useParams();

      useEffect(() => {
  
        axios.get(URL)
        .then((response) => {

            const json = response.data 

          setProduct(response.data);
        
        }).catch(error => {
         
         alert(error.response === undefied ? error : error.response.data.error)
          })
        }, [params])
      

      return (

        <div>
            <h2>{product?.nimi}</h2>
            <p>{product?.hinta}</p>
        </div>
      )
    }
   
