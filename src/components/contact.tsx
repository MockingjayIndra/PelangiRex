import React from 'react'
import Icon from './icons'

const Contact = () => {
    return (
        <>
            <section id="contact">
                <br />
                <div className="container-fluid text-dark">
                    <div className="row text-center">
                        <div className="col">
                            <br />
                            <h2>Contact Us</h2>
                            <hr />
                            <br /><br /><br />
                        </div>
                    </div>
                    <div className="row justify-content-center fs-6">
                        {/* <!-- Telepon --> */}
                        <div className="col-3 text-center">
                            <div className="icon"><i className="fa-solid fa-phone"></i></div>
                            <h5 className="text-center">Telephone</h5>
                            <a href="tel:+62 857 332 3466" className="text-decoration-none text-dark">(0361) 464154</a>
                        </div>
                        {/* <!-- Email --> */}
                        <div className="col-3 text-center">
                            <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                            <h5>E-mail</h5>
                            <a href="mailto:orderpelangirexs@gmail.com" className="text-decoration-none text-dark">orderpelangirexs@gmail.com</a>
                        </div>
                        {/* <!-- Alamat --> */}
                        <div className="col-3 text-center">
                            {/* <div className="icon"><i className="fa-solid fa-map-location-dot"></i></div> */}
                            <div className='icon'>
                                <Icon iconName="TextRight" />
                            </div>
                            <h5>Address</h5>
                            <a href="https://goo.gl/maps/tSKEus9oZQ48VXKW9" className="text-decoration-none text-dark">Jl. Sekar Jepun III No. 6, Kesiman Kertalangu</a>
                        </div>
                    </div>
                    <br /><br />
                    <div className="col text-center">
                        <a href="contact.html" className="btn btn-danger text-decoration-none">More Info</a>
                    </div>
                    <br />
                </div>
            </section>
        </>
    )
}

export default Contact