import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
   return (
      <div className="productgrid">
         <div>
            <h1>Best Selling Products</h1>
         </div>
         <div className="grid">
            {console.log(props.props.products)} 
            {props.props.products.map((product) => {
            return <ProductCard key={product.id} name={product.name} 
               price={product.price} pic={product.image}/>
            })}
         </div>
      </div>
   )
}