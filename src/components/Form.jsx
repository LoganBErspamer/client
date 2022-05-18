import axios from 'axios'
import React, {useState} from 'react'


const Form = (props) => {
    const [title, setTitle]=useState("")
    const [price, setPrice]=useState("")
    const [description, setDescription]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/prod`, {title, price, description})
            .then(response=>{
                console.log(response)
                props.reloadList()
            })
            .catch(err=>console.log(err))
    }
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
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default Form