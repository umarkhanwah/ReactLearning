import React from 'react'

import MyForm from '../components/Myform';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Products from '../components/Products';
import '../style/Shop.css'

function Shop() {

    let [products  , setProducts] = useState([]);
    let [categories  , setCategories] = useState([]);
    let [heading , setHeading] = useState("All Products");
    
      let searchProducts = (event)=>{
        
        let query = event.target.value;
        
        //Check if the input is empty 
        if(!query){
          fetchProducts();
          return
        }
          
        fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(res => res.json())
        .then((response)=>{setProducts(response.products)
        });
        setHeading(`Result for '${query}'`) 
  
         
          
      }
        
        
      let fetchProducts = ()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((response)=>{setProducts(response.products)
        });
        setHeading("All Products")
      }
      
      let fetchCategories = ()=>{
        fetch('https://dummyjson.com/products/categories').then(res=> res.json())
        .then((data)=>{setCategories(data)});
      }
  
  
      let fetchProductsbyCategory =(category) => {
        
        fetch(`https://dummyjson.com/products/category/${category.slug}`)
        .then(res => res.json())
        .then((res)=>setProducts(res.products));
  
        setHeading(category.name)
  
      }
      
      useEffect(()=>{
        fetchCategories();
        fetchProducts();
      } , [])
    

  return (
    <div className='container'>
        <div className="row py-3">
            <MyForm  action={searchProducts} />
            
              
              {/* <input
                type="text"
            
                class="form-control "
                placeholder='Search Products'
                onKeyUp={searchProducts}
              /> */}
            
            
           
        </div>
      
        <div className='row'>

          <h1 className='my-2 '>{heading} 
            {/* <FontAwesomeIcon className='fs-1 ms-3' icon={faCartFlatbed} /> */}
          </h1>
                <Categories fetchProducts={fetchProducts} fetchProductsbyCategory={fetchProductsbyCategory} categories={categories} />
                <Products products={products}/>
          
        </div>
      </div>
  )
}

export default Shop
