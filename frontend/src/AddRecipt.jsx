import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import bg from './assets/bgone.jpg'

function AddRecipt() {

    //handling and manging state values
    const[name, setName] = useState()
    const[ingredients, setIngredientd] = useState()
    const[description, setDescription] = useState()
    const navigate = useNavigate()
  
    //Submit and handling form inputs saving to the database
    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/addRecipt",{name,ingredients,description})
        .then(result => {
            console.log(result)
            navigate('/')
        } )
        .catch(err  => console.log(err))
    }

    return ( 
        <div className="d-flex vh-100 bg-success justify-content-center align-items-center" style={{background: `url(${bg})`, backgroundSize: 'cover', minHeight: '100vh'}}>
            <div  className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add Recipt</h2>
                    <div  className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Recipt Name" className="form-control"
                        onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div  className="mb-2">
                        <label htmlFor="">Ingredients</label>
                        <textarea type="text" placeholder="Enter Ingredients" className="form-control"
                        onChange={(e) => setIngredientd(e.target.value)}></textarea>
                    </div>
                    <div  className="mb-2">
                        <label htmlFor="">Description</label>
                        <textarea type="text" placeholder="Enter Descripton" className="form-control"
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <button  className="btn btn-success">Add Recipt</button>
                </form>
            </div>
        </div>
     );
}

export default AddRecipt;