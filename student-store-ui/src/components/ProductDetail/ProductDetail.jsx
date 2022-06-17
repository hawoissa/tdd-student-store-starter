import * as React from "react"
import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import { useParams } from "react-router-dom";

export default function ProductDetail(props) {
   let productId = useParams().productId;
   console.log(productId);
   return (
      <div className="productdetail">
         <ProductView props={props.products} id={productId}/>
      </div>
   )
}