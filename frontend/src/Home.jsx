import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


function Home() {

    const [recipts, setRecipt] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001")
        .then(result => setRecipt(result.data))
        .catch(err  => console.log(err))
    }, [])



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
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Recipt Name</th>
                            <th>Ingredients</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipts.map((recipt)  => {
                               return <tr>
                                    <td>{recipt.id}</td>
                                    <td> {recipt.name} </td>
                                    <td> {recipt.ingredients} </td>
                                    <td> {recipt.description} </td>
                                    <td> 
                                        <Link to={`/updateRecipt/${recipt._id}`} className="btn btn-success">Update</Link>
                                        <Link className="btn btn-danger" onClick={(e) => handleDelete(recipt._id)}>Delete</Link>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
     );
}

export default Home;