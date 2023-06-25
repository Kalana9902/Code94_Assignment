import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import bg from './assets/bgtwo.jpg'


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
             <h1 style={{textAlign: 'center', padding: '20px', color:'white', fontSize: '100px'}}>All Recipes</h1>
             <p style={{textAlign: 'center', color:'white', fontSize: '30px'}}>Click Recipe Name for View the Ingredients and Much More!!</p>
             <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginLeft: '300px',marginRight:'250px', marginTop: '100px' }}>
                         
   {recipts.map((recipt) => {
    return (
        <div key={recipt.id}>
            <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={bg} /> */}
      <Card.Body>
      <Link to={`/viewRecipt/${recipt._id}`} style={{ textDecoration: 'none' }}>
        <Card.Title style={{color:'black'}}>{recipt.name}</Card.Title>
      </Link>
        <Card.Text>
         {recipt.id}
        </Card.Text>
        <div style={{display: 'flex', justifyContent: 'space-between',marginLeft:'20px', marginRight: '20px'}}>
        <Button onClick={() => { navigate(`/updateRecipt/${recipt._id}`); } } style={{width:'70px'}} className="btn  btn-success">Edit</Button>
        <Button onClick={(e) => handleDelete(recipt._id)} variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
        </div>
    );
})}
</div>
        </div>
        
       

     );
}

export default Home;