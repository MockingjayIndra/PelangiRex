import React from 'react'
import Image from 'next/image'
import Card from './card'

const Product = () => {
    return (
        <section id="product">
            <br />
            <div className="container text-dark">
                <br />
                <div className="row text-center">
                    <div className="col">
                        <br />
                        <h2>Our Products</h2>
                        <hr />
                        <br /><br />
                    </div>
                </div>
                <div className="card-group justify-content-center">
                    <div className="row justify-content-center">
                        {/* <!-- Card 1 --> */}
                        <Card image='/2.jpg' text='Croissant, Danish, Puff Pastry, etc.'/>
                        {/* <!-- Card 2 --> */}
                        <Card image='/3.jpg' text='Croissant, Danish, Puff Pastry, etc.'/>
                        {/* <!-- Card 3 --> */}
                        <Card image='/4.jpg' text='Croissant, Danish, Puff Pastry, etc.'/>
                        {/* <!-- Card 4 --> */}
                        <Card image='/5.jpg' text='Croissant, Danish, Puff Pastry, etc.'/>
                        {/* <!-- Card 5 --> */}
                        <Card image='/6.jpg' text='Croissant, Danish, Puff Pastry, etc.'/>
                        {/* <!-- Card 6 --> */}
                        <Card image='/7.jpg' text='Croissant, Danish, Puff Pastry, etc.'/>
                        {/* <!--  --> */}
                    </div>
                </div>
                <div className="col text-center">
                    <a href="product.html" className="btn btn-danger text-decoration-none">More Detail</a>
                </div>
            </div>
        </section>
    )
}

export default Product