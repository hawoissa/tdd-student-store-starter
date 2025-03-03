import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
   
   return (
      <div className="productgrid" id="BuyNow">
         <div className="content">
            <div>
               <h1>Best Selling Products</h1>
            </div>
            <div className="grid">       
               {props.products.map((product, index) => {
               return <ProductCard key={index} name={product.name} 
                  price={product.price} pic={product.image} 
                  category={product.category} id={product.id} 
                  description={props.description} showDescription={false}
                  handleAddItemToCart={props.handleAddItemToCart}
                  handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                  shoppingCart={props.shoppingCart}/>
               })}
            </div>
         </div>
      </div>
   )
}