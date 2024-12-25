import React from 'react'
import EachItem from './EachItem'


const Products = ({products}) => {
    return (

        <div className='col-9  products' >
            <div className="row ">

                {products.length > 0 ? products.map((data, index) => {
                    return (
                        <div className='col-lg-3 my-3' >
                            <EachItem products={data} key={index} />

                        </div>
                    )
                }) : <h4 >No Products Found</h4>}
            </div>
        </div>
    )
}

export default Products
