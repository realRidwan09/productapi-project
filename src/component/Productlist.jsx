import React, { useEffect, useState } from 'react'
import Productcard from './Productcard'



const Productlist = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        fetchAPI()

    },[])

    const fetchAPI = async()=>{
        setLoading(true)

    try{
        await fetch("https://fakestoreapi.com/products").then
        (async (response)=>{
            setList(await response.json())
            setLoading(false)
            
        })

    } catch{
        (error)=>{
            setLoading(false)
            return console.log(error);
        }
    }

}


  return (
    <section>
        <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Up-to-date Wears & Gadgets</h1>
        
        {
            loading ? <p style={{textAlign: 'center'}}>Loading...  <img style={{width: '70px', height: '70px', margin: 'center'}} src="./src/assets/loading.avif" alt="" /></p> :
            <div style={{display: 'flex', gap: '30px', flexWrap: 'wrap'}}>
                {
                    list.map((data)=>{
                        return(
                            <Productcard key={data.id} title={data.title} price={data.price} description={data.description} category={data.category} image={data.image} />
                        )
                    })
                }
            </div>
        }
    </section>
  )
}

export default Productlist