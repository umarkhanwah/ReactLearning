import React from 'react'

const EachItem = (props) => {
  let {products} = props;
  
    return (
    <div className="card h-100 border-0 shadow rounded-pill overflow-hidden" >
      {products.thumbnail ?
        <img src={products.thumbnail} className="card-img-top" alt={products.title}/>
        : ""
      }
    
    <div className="card-body">
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">${products.price}</p>
        
    </div>
    </div>
    )
}

export default EachItem
