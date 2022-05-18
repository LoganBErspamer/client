import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {

    const [title, setTitle]=useState("")
    const [price, setPrice]=useState("")
    const [description, setDescription]=useState("")
    const {id} = useParams()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/prod/${id}`, {title, price, description})
            .then(response=>{
                navigate("/")
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/prod/${id}`)
            .then(response=>{
                const product = response.data
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
            .catch(err=>console.log(err))
    },[])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" name='title' value={title}
                    onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" name='price' value={price}
                    onChange={e=>setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" name='description' value={description}
                    onChange={e=>setDescription(e.target.value)}/>
            </div>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default Update