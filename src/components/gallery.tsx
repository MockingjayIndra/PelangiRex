import React from 'react'
import Image from 'next/image'

const Gallery = () => {
    return (
        <>
            <section id="gallery">
                <br /><br />
                <div className="container bg-light">
                    <div className="row text-center">
                        <div className="col">
                            <br />
                            <h2>Gallery</h2>
                            <hr />
                            <br /><br />
                            <div className="gallery">
                            <Image 
                                src={'/banner3.jpg'}
                                width={200}
                                height={200}
                                alt=''
                            />
                            <Image 
                                src={'/banner3.jpg'}
                                width={200}
                                height={200}
                                alt=''
                            />
                            <Image 
                                src={'/banner3.jpg'}
                                width={200}
                                height={200}
                                alt=''
                            />
                            <Image 
                                src={'/banner3.jpg'}
                                width={200}
                                height={200}
                                alt=''
                            />
                            <Image 
                                src={'/banner3.jpg'}
                                width={200}
                                height={200}
                                alt=''
                            />
                            <Image 
                                src={'/banner3.jpg'}
                                width={200}
                                height={200}
                                alt=''
                            />
                            <Image 
                                src={'/banner3.jpg'}
                                width={200}
                                height={200}
                                alt=''
                            />
                            <Image 
                                src={'/banner3.jpg'}
                                width={200}
                                height={200}
                                alt=''
                            />
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div className="col text-center">
                        <a href="#" className="btn btn-danger text-decoration-none">View More</a>
                    </div>
                    <br />
                </div>
            </section>
        </>
    )
}

export default Gallery