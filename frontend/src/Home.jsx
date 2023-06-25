import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import bg from './assets/bgone.jpg'


function Home() {

    const [recipts, setRecipt] = useState([])
    const navigate = useNavigate()

    // taking all the recipes in the database 
    useEffect(() => {
        axios.get("http://localhost:3001")
        .then(result => setRecipt(result.data))
        .catch(err  => console.log(err))
    }, [])


    // deleting a avalable recipe from the database
    const handleDelete = (id) => {
            Swal.fire({
              title: 'Are you sure?',
              text: 'You are about to delete this recipe.',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) {
                axios.delete('http://localhost:3001/deleteRecipt/'+id)
                .then(result =>{ console.log(result)
                    window.location.reload()})
                .catch(err => console.log(err))
              }
            });
          };

    return ( 
     
        <div style={{ background: `url(${bg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
             <h1 style={{textAlign: 'center', padding: '20px'}}>All Recipes</h1>
             <p style={{textAlign: 'center'}}>Click Recipe Name for View the Ingredients and Much More!!</p>
             <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginLeft: '300px', marginTop: '100px' }}>
            
{recipts.map((recipt) => {
    return (
        <div key={recipt.id}>
            <ul className="conts">
                <li style={{ textDecoration: 'none', listStyle: 'none' }}>
                    <Card style={{ width: '19rem',
                                     }}>
                        <ListGroup className="list-group-flush">
                            <Link to={`/viewRecipt/${recipt._id}`} style={{ textDecoration: 'none' }}>
                                <ListGroup.Item><h5 style={{ textAlign: 'center' }}>{recipt.name}</h5> </ListGroup.Item>    
                            </Link>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                                <Button onClick={() => { navigate(`/updateRecipt/${recipt._id}`); } }
                                    style={{
                                        width: '150px',
                                        marginLeft: '45px',
                                        marginTop: '10px',
                                        marginBottom: '10px'
                                    }}
                                    variant="success"
                                    name="edit"
                                >
                                    Edit
                                </Button>
                                <Button onClick={(e) => handleDelete(recipt._id)}
                                    style={{
                                        width: '150px',
                                        marginLeft: '45px',
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                        marginRight: '30px'
                                    }}
                                    variant="danger"
                                    name="delete"
                                >
                                    Delete
                                </Button>
                            </div>
                        </ListGroup>
                    </Card>
                </li>
            </ul>
        </div>
    );
})}
</div>
        </div>
        
       

     );
}

export default Home;