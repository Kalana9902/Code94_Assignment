import React, {useEffect} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams} from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import bg from './assets/bgone.jpg'

function ViewRecipt() {

    const{id} = useParams()
    const[name, setName] = useState()
    const[ingredients, setIngredientd] = useState()
    const[description, setDescription] = useState()

    //taking recipt details when page loading according the id
    useEffect(() =>{
        axios.get('http://localhost:3001/getRecipe/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setIngredientd(result.data.ingredients)
            setDescription(result.data.description)
        })
        .catch(err => console.log(err))
    }, [])

    return ( 
        <div  style={{display: 'flex',justifyContent: 'center', background: `url(${bg})`, backgroundSize: 'cover', minHeight: '100vh'}}>
            <Card style={{ width: '600px', height: '750px', marginTop: '50px',}}>
             <ListGroup className="list-group-flush">
             <ListGroup.Item><p style={{textAlign: 'center', fontSize:'30px', fontWeight:'bold'}}>Recipt Details</p></ListGroup.Item>
             <ListGroup.Item><span style={{fontWeight: 'bold', fontSize:'30px'}}>ID :</span><span  style={{fontSize:'25px'}}> {id} </span> </ListGroup.Item>
             <ListGroup.Item> <span style={{fontWeight: 'bold',fontSize:'30px'}}>Name :</span> <span  style={{fontSize:'25px'}}> {name} </span></ListGroup.Item>
             <ListGroup.Item> <span style={{fontWeight: 'bold',fontSize:'30px'}}>Ingredients :</span> <span  style={{fontSize:'25px'}}> {ingredients} </span></ListGroup.Item>
             <ListGroup.Item> <span style={{fontWeight: 'bold',fontSize:'30px'}}>Description :</span> <span style={{fontSize:'25px'}}> {description} </span></ListGroup.Item>
             <Link style={{width: '150px', marginTop:'20px', marginLeft: '200px'}} to="/" className="btn btn-outline-success ">Back</Link>
             </ListGroup>
         </Card>
        </div>
     );
}

export default ViewRecipt;