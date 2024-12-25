import React from 'react'

const Categories = ({fetchProducts  , fetchProductsbyCategory ,categories}) => {
    return (
        <ul className='col-lg-3  categories' >

            <li className='rounded-pill' onClick={fetchProducts}>
                All
            </li>

            {categories.map((data, index) => {
                return (

                    <li className='rounded-pill' onClick={() => fetchProductsbyCategory(data)}>{data.name}</li>
                )
            })}
            
        </ul>
    )
}

export default Categories
