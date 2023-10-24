import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow fixed-top" style={{backgroundColor : '#071e3d'}}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <Image
                        src="/pelangirex.png"
                        width={300}
                        height={65}
                        alt=""
                    />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link scrollto active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scrollto" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scrollto" href="#product">Product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scrollto" href="#gallery">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scrollto" href="#contact">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar