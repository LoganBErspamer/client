import React, {useState, useEffect} from 'react'
import axios from "axios"
import Form from '../components/Form'
import AllDisplay from '../components/AllDisplay'

const Main = () => {

    const[products, setProducts]= useState([])
    const[refresh, setRefresh]=useState(true)


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/prod`)
        .then(response=>{
            setProducts(response.data)
        })
        .catch(err=>console.log(err))
    },[refresh])

    const reload = ()=>{
        setRefresh(!refresh)
    }
  return (
    <div>
        <Form reloadList={reload}/>
        <AllDisplay products={products} reloadList={reload}/>
    </div>
  )
}

export default Main