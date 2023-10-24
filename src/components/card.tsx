import React from 'react'
import Image from 'next/image'

type CardProps = {
    image:string,
    text: string

}
const Card = (props:CardProps) => {
    return (
        <>
        <div className="col-md-2 col-sm-6 mb-3 overflow-hidden">
            <div className="card mb-3 border-dark" style={{width : '12rem'}}>
                <Image 
                    src={props.image}
                    width={190}
                    height={200}
                    alt=''
                    className='rounded'
                />
                <div className="card-body" style={{height : '160px'}}>
                    <h4>Frozen</h4>
                    <p className="card-text">({props.text}).</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card