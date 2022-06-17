import * as React from "react"
import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function ProductDetail(props) {
   let productId = useParams().productId;
   
   const [product, setProduct] = useState([]);

   // let product;

   useEffect( async () => {
      const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
      console.log("this is response");
      console.log(response.data);
      setProduct(response.data.product);  
    }, []);



   function handleDescription() {
      props.setShowDescription(true);
   }   
   return (
      <div className="productdetail">
         <ProductView product={product} id={productId} onClick={() => handleDescription}
         showDescription={props.showDescription} setShowDesciption={props.setShowDesciption}/>
      </div>
   )
}