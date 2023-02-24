

import { Input } from '@chakra-ui/input'
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'

const Test = () => {
const [prod,setProd] =useState({})
    useEffect(()=>{
       axios.get(`https://lesn-shop-server.onrender.com/all_computer_glasses/${id}`)
       .then(res=>setProd(res.data))
       .catch(e=>console.log(e))
       
    },[])

    const handleChange = (e)=>{
       setProd({...prod,[e.target.name]:e.target.value})
    }
    console.log(prod)
    const {id} =useParams()
  return (
    <div>Test:{id}
    
    <Input value={prod.product_name} name="product_name" onChange={handleChange}/>
    </div>
  )
}

export default Test
