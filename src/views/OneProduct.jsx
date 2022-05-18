import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const OneProduct = () => {

    const [product, setProduct]= useState()
    const {id} = useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/prod/${id}`)
        .then(response=>{
           setProduct(response.data)
        })
        .catch(err=>console.log(err))
    })

    const handleDelete =(deleteId)=>{
        axios.delete(`http://localhost:8000/api/prod/${deleteId}`)
        .then(response=>{
            // const filteredList = product.filter((product,i)=>product._id !== deleteId)
            // setProduct(filteredList)
            navigate("/")
        })
    }

  return (
    <div>
        {
            product&&
            <div>
                <h1>{product.title}</h1>
                <h3>Price: {product.price}</h3>
                <h3>Description: {product.description}</h3>
                <button onClick={()=>handleDelete(product._id)}>Delete</button>
            </div>
        }
    </div>
  )
}

export default OneProduct