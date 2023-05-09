import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ContactList = () => {
    const [data, setdata] = useState([])
    // console.log(data);

    const getData = async () => {
        const url = "http://localhost:5000/contact"
        const { data } = await axios.get(url)
        console.log(data);
        setdata(data)
    }
    const handleDelete = async (id) => {
        const url = `http://localhost:5000/contact/${id}`
        const { data } = await axios.delete(url)
        console.log("data deleted");

        getData()
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            <div className="container">
                <Link to={"/"} className="d-flex justify-content-center mt-20">
                    <button className='btn btn-primary'>Add User</button>
                </Link>
                <div className="row">
                    {
                        data.map(item => <>
                            <div className="col-sm-6">
                                <div className="card border-dark mt-3">
                                    <div className="card-body d-flex justify-content-evenly">
                                        <div className="col-sm-6 col-md-6">
                                            <img src={item.img}
                                                className="rounded-circle"
                                                style={{ height: "150px", width: "150px" }} alt="" />
                                            <hr />
                                        </div>
                                        <div className="col-sm-6">
                                            <h5 className='fs-6'>Name: {item.name}</h5>
                                            <hr />
                                            <h5 className='fs-6'>Contact: {item.contact}</h5>
                                            <hr />
                                            <h5 className='fs-6'>Email: {item.email}</h5>

                                        </div>


                                    </div>
                                    <div className="card-footer">
                                        <div className="group d-flex justify-content-evenly">
                                            <Link to={`/contactDetails/${item.id}`}>
                                                <button className='btn btn-success  '>View</button>

                                            </Link>
                                            <Link to={`/editContact/${item.id}`}>
                                                <button className='btn btn-warning'>Edit</button>
                                            </Link>

                                            <button
                                                onClick={e => handleDelete(item.id)}
                                                className='btn btn-danger'>Delete</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>)
                    }
                </div>
            </div>

        </>
    );
}
export default ContactList;
