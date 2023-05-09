import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ContactDetails() {
    const { cid } = useParams()
    console.log(cid);

    const [getId, setgetId] = useState({})


    const getdetails = async () => {
        const url = `http://localhost:5000/contact/${cid}`
        const { data } = await axios.get(url)
        console.log(data);

        setgetId(data)

    }

    useEffect(() => {
        getdetails()
    }, []);
    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-sm-6">
                        <div class="card w-75" >
                            <img src={getId.img} class="card-img-top ms-5" style={{ width: "300px", height: "250px" }} />
                            <div class="card-body">
                                <h5 class="card-text">name    : {getId.name}</h5> <hr />
                                <h5 class="card-text">Email   :{getId.email}</h5> <hr />
                                <h5 class="card-text">Contact :{getId.contact}</h5> <hr />
                                <h5 class="card-text">Age     :{getId.age}</h5> <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={"/contactList"} className="d-flex justify-content-center" >
                <button button className='btn btn-warning'>Back</button>
            </Link>
        </>
    )
}
