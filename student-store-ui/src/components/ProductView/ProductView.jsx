import * as React from "react"
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
  let product = props.props[props.id-1];
  console.log(product);
   return (
      <div className="productview">
         {/* <h1>Product #{props.id}</h1>
         <img src={product.image} alt="" />
         <h3>{product.name}</h3>
         <h4>${product.price}</h4>
         <p>{product.description}</p> */}
         <ProductCard name={product.name} pic={product.image}
       price={product.price}/>
      </div>
   )
}