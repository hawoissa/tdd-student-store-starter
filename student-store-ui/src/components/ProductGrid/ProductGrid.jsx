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
            {props.props.products.map((product, index) => {
            return <ProductCard key={index} name={product.name} 
               price={product.price} pic={product.image} 
               category={product.category} id={product.id} showDescription={false}/>
            })}
         </div>
      </div>
   )
}