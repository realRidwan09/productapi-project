const Productpage =(props)=>{
    const {productName, productPrice, productdescription, productcategories, productImage } = props
    return(
        <>
            <h3>{productName}</h3>
            <h4>{productPrice}</h4>
            <p>{productdescription}</p>
            <p>{productcategories}</p>
            <img src={productImage} alt="" />
        </>
    )
}

export default Productpage