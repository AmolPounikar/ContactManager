import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function EditContacts() {
    const [userData, setuserData] = useState({});
    const { id } = useParams()
    console.log(id);

    const getData = async () => {
        const url = `http://localhost:5000/contact/${id}`
        const { data } = await axios.get(url)
        console.log(data);
        setuserData(data)
    }

    const editData = () => {
        const url = `http://localhost:5000/contact/${id}`
        const { data } = axios.put(url, userData)
        console.log(data);
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <>
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
                                        value={userData.name}
                                        onChange={e => setuserData({ ...userData, name: e.target.value })}
                                    />

                                </div>
                                <div className="mt-2">
                                    <label for="email" className="form-label">First Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter Your Email"
                                        value={userData.email}
                                        onChange={e => setuserData({ ...userData, email: e.target.value })} />

                                </div>
                                <div className="mt-2">
                                    <label for="contact" className="form-label">Contact</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="contact"
                                        placeholder="Enter Your Contact no."
                                        value={userData.contact}
                                        onChange={e => setuserData({ ...userData, contact: e.target.value })} />

                                </div>
                                <div className="mt-2">
                                    <label for="img" className="form-label">Enter Image URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="img"
                                        placeholder="Enter Your age"
                                        value={userData.img}
                                        onChange={e => setuserData({ ...userData, img: e.target.value })} />
                                </div>
                                <div className="mt-2">
                                    <label for="age" className="form-label">Enter Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="age"
                                        placeholder="Enter Your age"
                                        value={userData.age}
                                        onChange={e => setuserData({ ...userData, age: e.target.value })} />
                                </div>



                                <Link to={"/contactList"}  >   <button
                                    onClick={editData}
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
