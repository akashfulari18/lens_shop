import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table'
import axios from 'axios'
import React ,{useState,useEffect} from 'react'
import {FaEdit} from "react-icons/fa"
const ComputerGlassPanel = () => {

    const [computerGlass ,setComputerGlass] =useState([])
    console.log("computerGlass",computerGlass)


    let getComputerGlassData = async () => {
        await axios
          .get(`https://lesn-shop-server.onrender.com/all_computer_glasses`)
          .then((res) => {
            setComputerGlass(res.data);
          })
          .catch((e) => console.log(e));
      };

      useEffect(() => {
        getComputerGlassData() 
      }, [])
      

    const headingStyle={
        fontSize:"1rem",
        fontWeight:"600",
        color:"red",
       
    }
    const tdStyle={
        fontSize:"1rem",
        fontWeight:"500",
        color:"#07080A"
    }

    const removeItem=async(id)=>{
        await axios.delete(`https://lesn-shop-server.onrender.com/all_computer_glasses/${id}`)
        .then(()=>{
            let resArr= computerGlass.filter((el,i)=>(
                el.id!=id
            ))
            setComputerGlass(resArr)
        })
        .catch((er)=>console.log(er))
    }

  return (
    <div>
        ComputerGlassPanel
        
        <TableContainer>
  <Table variant="striped" colorScheme="cyan" mb="2rem">
    
    <Thead>
      <Tr>
        <Th style={headingStyle} >Sr No</Th>
        <Th style={headingStyle} > Edit</Th>
        <Th style={headingStyle} >Product Name</Th>
        <Th style={headingStyle} >Model Name</Th>
        <Th style={headingStyle} >Brand Name</Th>
        <Th style={headingStyle} >Price</Th>
        <Th style={headingStyle} >Product Image</Th>

        <Th fontSize={"1rem"}>Delete Product</Th>
      </Tr>
    </Thead>
    <Tbody>
        {
            computerGlass?.map((el,i)=>(
                <Tr>
        <Td style={tdStyle}>{i+1}</Td>
        <Td style={tdStyle}><FaEdit/></Td>
        <Td style={tdStyle}>{el.product_name}</Td>
        <Td style={tdStyle}>{el.model_name}</Td>
        <Td style={tdStyle}>{el.brand_name}</Td>
        <Td style={tdStyle}>{el.price}</Td>
        <Td style={tdStyle}><Image src={el.image_url} h="60px" w="100px"/></Td>
        
        <Td style={tdStyle}><Button variant={"outline"} _hover={{color:"red",backgroundColor:"#D5D6D7"}} backgroundColor="red.400" color={"white"} cursor={"pointer"} onClick={()=>removeItem(el.id)}>Remove</Button></Td>
      </Tr>
            ))
        }
      
      
    </Tbody>
    
  </Table>
</TableContainer>

    </div>
  )
}

export default ComputerGlassPanel