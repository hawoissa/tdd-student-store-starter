import * as React from "react"
import "./Search.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import { useState } from "react"
import submitPic from "../pictures/search.png"
import axios from "axios"

export default function Search(props) { 
   
  async function updateProps(selectedCategory) { 
      let originalProduct = await getData();
      if (selectedCategory == "all") {
         props.setProducts(originalProduct);
      } else {      
      const updateProp = originalProduct.filter((element) => {
         //console.log(element.category, selectedCategory);
         return element.category == selectedCategory;
      })
      props.setProducts(updateProp);
      }
   }

   const getData = async () => {
      const { data } = await axios.get("https://codepath-store-api.herokuapp.com/store");  
      return data.products;
    };

    async function updatePropsSearch(str) { 
      let originalProduct = await getData();      
      const updateProp = originalProduct.filter((element) => {
        return element.name.toLowerCase().includes(str.toLowerCase());
      })
      props.setProducts(updateProp);
    }
   //}
   
   //console.log(updateProp);
   // const updateProps = props.products.category.includes("food");
   // console.log(updateProps);
  
    // async function searchInput(input) {
    //   //let originalProduct = await getData();
    //   //console.log(originalProduct);
    //   console.log(input);
    //   let updateProp = props.products.name.includes(input);
    //   props.setProducts(updateProp);
    // }
    function handleSearchWord(input) {
      props.setSearchWord(input);
      updatePropsSearch(input);
    }

   return (
      <div className="subbar">
      <div className="content">
        <div className="input">
        <form >
          <input className="textarea" type="search" 
          value={props.searchWord} placeholder="Search.." 
          onInput={(input) => handleSearchWord(input.target.value)}/>
          <button type="submit"><img src={submitPic} className="button"/></button>
        </form>
        </div>
        <div className="category">
          <ul> 
            <li><button className="all" onClick={() => updateProps("all")}>All Categories</button></li>
            <li><button className="clothing" onClick={() => updateProps("clothing")} >Clothing</button></li>
            <li><button className="food" onClick={() => updateProps("food")}>Food</button></li>
            <li><button className="accessories" onClick={() => updateProps("accessories")}>Accessories</button></li>
            <li><button className="tech" onClick={() => updateProps("tech")}>Tech</button></li>
          </ul>
        </div>
      </div>
    </div>
   )
}