import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bg from './assets/bgone.jpg'
import { toast } from "react-toastify";

function UpdateRecipt() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    // Fetching recipe details based on the recipe id when the page loads
    useEffect(() => {
        axios
            .get('http://localhost:3001/getRecipe/'+id)
            .then((result) => {
                const { name, ingredients, description } = result.data;
                setName(name);
                setIngredients(ingredients);
                setDescription(description);
            })
            .catch((err) => console.log(err));
    }, [id]);

    // Updating the current values for the particular id
    const updateRecipe = (e) => {
        e.preventDefault();
            axios.put('http://localhost:3001/updateRecipe/'+id, {
                name,
                ingredients,
                description,
            })
            .then((result) => {
                console.log(result);
                navigate('/');
                toast.success("Recipe updated successfully", {
                    position: 'top-center',
                    autoClose: 1500
                });
            })
            .catch((err) => console.log(err));
    }
    return ( 
        <div style={{background:`url(${bg})`, backgroundSize: 'cover', minHeight: '100vh'}} className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div  className="w-50 bg-white rounded p-3">
                <form  onSubmit={updateRecipe}>
                    <h2>Update Recipt</h2>
                    <div  className="mb-2">
                        <label htmlFor="" style={{fontWeight:'bold', fontSize:'20px'}}>Name</label>
                        <input style={{fontSize:'25px'}} type="text" placeholder="Enter Recipt Name" className="form-control"
                        value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div  className="mb-2">
                        <label htmlFor="" style={{fontWeight:'bold', fontSize:'20px'}}>Ingredients</label>
                        <input style={{fontSize:'25px'}} type="text" placeholder="Enter Recipt Name" className="form-control" value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}></input>
                    </div>
                    <div  className="mb-2">
                        <label htmlFor="" style={{fontWeight:'bold', fontSize:'20px'}}>Description</label>
                        <textarea style={{height: '200px',  fontSize:'25px'}} type="text" placeholder="Enter Recipt Name" className="form-control" value={description}
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <button style={{fontSize:'30px'}} className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
     );
}

export default UpdateRecipt;