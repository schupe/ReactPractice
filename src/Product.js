import React from 'react'

function Product(props){
    
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>Price: ${props.price}</h4>
            <h5>{props.desc}</h5>
        </div>
    )
}

export default Product