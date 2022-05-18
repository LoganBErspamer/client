import React from 'react'
import { Link } from 'react-router-dom';

const AllDisplay = (props) => {
    const {products} = props;

  return (
    <div>
        <h1>All Products:</h1>
        {
            props.products.map((eachProduct, i)=>{
                return(
                    <h3 key={i}>
                        <Link to={`products/${eachProduct._id}`}>{eachProduct.title}</Link>
                    </h3>
                )
            })
        }
    </div>
  )
}

export default AllDisplay