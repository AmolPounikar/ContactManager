import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark -lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" to="/">AddContacts</Link>
                            <Link className="nav-link active" to="/contactDetails/:contactId">ContactDetails</Link>
                            <Link className="nav-link active" to="/contactList">ContactList</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
