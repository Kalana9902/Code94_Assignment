import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bg from './assets/bgone.jpg'

function UpdateRecipt() {
    const{id} = useParams()
    const[name, setName] = useState()
    const[ingredients, setIngredientd] = useState()
    const[description, setDescription] = useState()
    const navigate = useNavigate()

    //taking recipt details according the recipt id when page loading
    useEffect(()  => {
        axios.get('http://localhost:3001/getRecipt/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setIngredientd(result.data.ingredients)
            setDescription(result.data.description)
        })
        .catch(err => console.log(err))
    }, [])

    //updatng current values according the particular id
    const Update = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/updateRecipt/'+id, {name, ingredients, description})
        .then(result =>{ console.log(result)
        navigate('/')})
        .catch(err => console.log(err))
    }

    return ( 
        <div style={{background:`url(${bg})`, backgroundSize: 'cover', minHeight: '100vh'}} className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div  className="w-50 bg-white rounded p-3">
                <form  onSubmit={Update}>
                    <h2>Update Recipt</h2>
                    <div  className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Recipt Name" className="form-control"
                        value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div  className="mb-2">
                        <label htmlFor="">Ingredients</label>
                        <input type="text" placeholder="Enter Recipt Name" className="form-control" value={ingredients}
                        onChange={(e) => setIngredientd(e.target.value)}></input>
                    </div>
                    <div  className="mb-2">
                        <label htmlFor="">Description</label>
                        <textarea style={{height: '200px'}} type="text" placeholder="Enter Recipt Name" className="form-control" value={description}
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <button  className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
     );
}

export default UpdateRecipt;