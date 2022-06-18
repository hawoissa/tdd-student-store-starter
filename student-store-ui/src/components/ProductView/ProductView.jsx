import * as React from "react"
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
   let product = props.product;
//   console.log(props);
//   console.log(product);
   console.log(props);
   return (
      <div className="productview">
         <ProductCard name={product.name} pic={product.image} id={product.id}
       price={product.price} description={product.description} showDescription={true}/>
      </div>
   )
}