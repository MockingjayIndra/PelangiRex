import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <section id="about" style={{paddingBottom : 0}}>
                <br />
                <div className="container bg-light text-dark">
                    <br />
                    <div className="row text-center">
                        <div className="col">
                            <br />
                            <h2>About Us</h2>
                            <hr />
                            <br /><br />
                        </div>
                    </div>
                    <div className="row justify-content-center fs-5">
                        <div className="col-5 text-center">
                            <Image
                                src={'/1.jpg'}
                                width={400}
                                height={400}
                                alt=''
                                className='img-thumbnail'
                            />
                        </div>
                        <div className="col-6">
                            <p><strong>CV.PELANGI (REX&#39;S)</strong> is a pastry bakery ingredients company that serves hotel, restaurant, catering etc in Bali.</p>
                            <p>
                                This company has been established since 2000 in Denpasar Bali. Start from a small home industry where the owner wanted to developed his skill gained from his previous jobs in sales marketing, cost control, store purchasing in
                                a five star hotel in Sanur where he started his bussiness career in the pastry and bakery industry.
                            </p>
                            <a href="about.html" className="btn btn-danger text-decoration-none" role="button">Read More</a>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </section>
        </>
    )
}

export default About