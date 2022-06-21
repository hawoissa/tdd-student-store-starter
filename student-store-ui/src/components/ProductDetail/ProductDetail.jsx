import * as React from "react"
import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function ProductDetail(props) {
   let productId = useParams().productId;
   const [product, setProduct] = useState([]);

   // gets product
   // useEffect( async () => {
   //    const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
   //    setProduct(response.data.product);  
   //  }, []);

   useEffect( async () => {
      props.setIsFetching(false);
      try {
         const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
         setProduct(response.data.product);  
      } catch (error) {
         console.log(props.error);
      } finally {
         props.setIsFetching(false);
      }
    }, []);
   
   // to see if api is fetching, will display loading
   if (props.isFetching) {
      return <h1>Loading..</h1>;
   }

   
   // displays description of item, product veiw
   function handleDescription() {
      props.setShowDescription(true);
   }   

   return (
      // productId < props.products.length ? 
      <div className="productdetail">
         <ProductView product={product} id={productId} onClick={() => handleDescription}
         showDescription={props.showDescription} setShowDesciption={props.setShowDesciption}
         handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
      </div>
      // : <NotFound />
   )
}