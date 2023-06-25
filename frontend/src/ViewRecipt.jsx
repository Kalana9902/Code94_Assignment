import React, {useEffect} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import bg from './assets/bgone.jpg'

function ViewRecipt() {

    const{id} = useParams()
    const[name, setName] = useState()
    const[ingredients, setIngredientd] = useState()
    const[description, setDescription] = useState()
    const navigate = useNavigate()

    //taking recipt details when page loading according the id
    useEffect(() =>{
        axios.get('http://localhost:3001/getRecipt/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setIngredientd(result.data.ingredients)
            setDescription(result.data.description)
        })
        .catch(err => console.log(err))
    }, [])

    return ( 
        <div  style={{display: 'flex',justifyContent: 'center', background: `url(${bg})`, backgroundSize: 'cover', minHeight: '100vh'}}>
            <Card style={{ width: '500px', height: '450px', marginTop: '50px',}}>
             <ListGroup className="list-group-flush">
             <ListGroup.Item><h4 style={{textAlign: 'center'}}>Recipt Details</h4></ListGroup.Item>
             <ListGroup.Item><span style={{fontWeight: 'bold'}}>ID :</span> {id} </ListGroup.Item>
             <ListGroup.Item> <span style={{fontWeight: 'bold'}}>Name :</span>  {name} </ListGroup.Item>
             <ListGroup.Item> <span style={{fontWeight: 'bold'}}>Ingredients :</span> {ingredients} </ListGroup.Item>
             <ListGroup.Item> <span style={{fontWeight: 'bold'}}>Description :</span> {description}</ListGroup.Item>
             <Link style={{width: '150px', marginTop:'20px', marginLeft: '150px'}} to="/" className="btn btn-outline-success ">Back</Link>
             </ListGroup>
         </Card>
        </div>
     );
}

export default ViewRecipt;