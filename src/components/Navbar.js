import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
                            <Link className="nav-link active" aria-current="page" to='/'>Indumentaria</Link>
                            <Link className="nav-link active" aria-current="page" to='/'>Contacto</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar