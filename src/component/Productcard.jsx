import React from 'react'
import './Productcard.css'
import { Link } from 'react-router-dom'

const Productcard = (props) => {
  return (
    <section className='productCard-wrap'>
        <div>
            <h3 id='productTitle'>{props.title}</h3>
            <h4 id='productPrice'>Price: ${props.price}</h4>
            <p id='productDescription'><b>Description:</b> {props.description}</p>
            <p id='productCategory'><b>Category:</b> {props.category}</p>
        </div>
        <img id='productImage' src={props.image} alt="productImage" />

        <Link to={"/productpage"}>
        <button>See more</button> 
        </Link>     
    </section>
  )
}

export default Productcard