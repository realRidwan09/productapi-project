import React, {useEffect, useState} from 'react'
import Productcard from './Productcard'

const Productlist = ()=>{
    const [list, setList] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(()=>{
        fetch()
    }, [])

    const fetch = async()=>{
        setLoad(true)

        try{
            await fetch('https://fakestoreapi.com/products').then(async (response)=>{
            setList(await response.json())
            setLoad(false)}
        )}
    
        catch{
            (error)=>{
                setLoad(false)
                return console.log(error);
            }
        } 
    }

    return(
    
        <div className="parentProductlist">
             {
                     load ? <p>loading... </p> : 
                     <div style={{display:'flex', gap: '30px', flexwrap: 'wrap'}}>
                         { 
                         list.map((info)=>{

                             return (
                                     <Productcard key={info.id} title ={info.title} price ={info.price} description ={info.description} 
                                     category ={info.category} image ={info.image} />
                                 )
                         })
                         }
                     </div>
             }

        </div>
)

} 

export default Productlist

