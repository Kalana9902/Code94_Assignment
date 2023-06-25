import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddRecipt() {

    const[name, setName] = useState()
    const[ingredients, setIngredientd] = useState()
    const[description, setDescription] = useState()
    const navigate = useNavigate()

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
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
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
                        <input type="text" placeholder="Enter Recipt Name" className="form-control"
                        onChange={(e) => setIngredientd(e.target.value)}></input>
                    </div>
                    <div  className="mb-2">
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder="Enter Recipt Name" className="form-control"
                        onChange={(e) => setDescription(e.target.value)}></input>
                    </div>
                    <button  className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
     );
}

export default AddRecipt;