import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [recipts, setRecipt] = useState([{
        ID: 1 , Name:  "Fried Rice", Ingredients: "Basmathi, Carrot, Salt Peper", Description: "add basmathi "
    }])

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
                                    <td>{recipt.ID}</td>
                                    <td> {recipt.Name} </td>
                                    <td> {recipt.Ingredients} </td>
                                    <td> {recipt.Description} </td>
                                    <td> 
                                        <Link to="/updateRecipt" className="btn btn-success">Update</Link>
                                        <Link to="/updateRecipt" className="btn btn-danger">Delete</Link>
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