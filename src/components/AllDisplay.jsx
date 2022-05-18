import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AllDisplay = (props) => {
    const {products} = props;
    const navigate=useNavigate()

const handleDelete=(deleteId)=>{
    axios.delete(`http://localhost:8000/api/prod/${deleteId}`)
        .then(response=>{
            // const filteredList = products.filter((products, i)=>products._id !== deleteId)
            props.reloadList()
        })
        .catch(err=> console.log(err))
}

  return (
    <div>
        <h1>All Products:</h1>
        {
            props.products.map((eachProduct, i)=>{
                return(
                    <h3 key={i}>
                        <Link to={`products/${eachProduct._id}`}>{eachProduct.title}</Link>
                        <Link to={`products/${eachProduct._id}/edit`}>Edit</Link>
                        <button onClick={()=>handleDelete(eachProduct._id)}>Delete</button>
                    </h3>
                )
            })
        }
    </div>
  )
}

export default AllDisplay