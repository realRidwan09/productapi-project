import React from "react"
import {Link} from 'react-router-dom'

const Productcard = (props)=>{
    return(
        <>
            <div className="parentWrap">
                <div id="productDetails">
                    <h3 id="productName">{props.title}</h3>
                    <h4 id="productPrice">{props.price}</h4>
                    <p id="productDescription">{props.description}</p>
                    <p id="productCatgories">{props.category}</p>
                </div>
                <img id="productImage" src={props.image} alt="productImage" />

                {/* <Link to ={'/productPage'}>
                    <button>Click</button>
                </Link> */}
            </div>
        </>
    )
}

export default Productcard