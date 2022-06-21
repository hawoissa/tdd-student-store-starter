import * as React from "react"
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
   let product = props.product;
   return (
      <div className="productview">
         <ProductCard name={product.name} pic={product.image} id={product.id}
       price={product.price} description={product.description} showDescription={true}
       handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
      </div>
   )
}