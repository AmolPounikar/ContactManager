import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function AddContacts() {
    const [addDetails, setaddDetails] = useState({

        name: "",
        email: "",
        contact: "",
        img: "",
        age: "",

    });



    const handleClick = () => {

        const url = "http://localhost:5000/contact"
        axios.post(url, addDetails)
            .then((res) => {
                console.log(res);
            })
        console.log(addDetails);
    }
    return (
        <>
            <h1>Add Contacts</h1>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header">Signup</div>
                            <div className="card-body">
                                <div>
                                    <label for="name" className="form-label">First name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"

                                        placeholder="Enter your name"
                                        value={addDetails.name}
                                        onChange={e => setaddDetails({ ...addDetails, name: e.target.value })}
                                    />

                                </div>
                                <div className="mt-2">
                                    <label for="email" className="form-label">First Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter Your Email"
                                        value={addDetails.email}
                                        onChange={e => setaddDetails({ ...addDetails, email: e.target.value })} />

                                </div>
                                <div className="mt-2">
                                    <label for="contact" className="form-label">Contact</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="contact"
                                        placeholder="Enter Your Contact no."
                                        value={addDetails.contact}
                                        onChange={e => setaddDetails({ ...addDetails, contact: e.target.value })} />

                                </div>
                                <div className="mt-2">
                                    <label for="img" className="form-label">Enter Image URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="img"
                                        placeholder="Enter Your age"
                                        value={addDetails.img}
                                        onChange={e => setaddDetails({ ...addDetails, img: e.target.value })} />
                                </div>
                                <div className="mt-2">
                                    <label for="age" className="form-label">Enter Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="age"
                                        placeholder="Enter Your age"
                                        value={addDetails.age}
                                        onChange={e => setaddDetails({ ...addDetails, age: e.target.value })} />
                                </div>



                                <Link to={"/contactList"}  >   <button
                                    onClick={handleClick}
                                    className="btn btn-primary w-100 mt-3">
                                    Submit
                                </button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

