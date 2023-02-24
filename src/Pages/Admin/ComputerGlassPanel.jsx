import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { useDisclosure } from '@chakra-ui/hooks'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'

import { Modal, ModalHeader, ModalOverlay ,ModalCloseButton, ModalBody, ModalFooter, ModalContent} from '@chakra-ui/modal'
import { Select } from '@chakra-ui/select'
import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table'
import axios from 'axios'

import React ,{useState,useEffect} from 'react'
import {FaEdit} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'

import { getComputerGlassData, updateItemComp } from '../../store/Product/product.actions'
const ComputerGlassPanel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { compGlassData } =useSelector(store=>store.product)
    const [prod,setProd] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e)=>{
            setProd({...prod,[e.target.name]:e.target.value})
        }
        useEffect(() => {
            dispatch(getComputerGlassData()) 
        }, [])
        
        console.log("prodDetails:",prod)

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


    const handleUpdate=(el)=>{
        
        setProd(el)

    }

    const removeData =async(id)=>{
         await axios.delete(`https://lesn-shop-server.onrender.com/all_computer_glasses/${id}`)
         .then(res=>{
            console.log(res)
            dispatch(getComputerGlassData())
         })
         .catch(e=>console.log(e))
    }
   
// console.log("prod",prod)
  return (
    <div>
        
        
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
            compGlassData?.map((el,i)=>(
                <Tr>
        <Td style={tdStyle}>{i+1}</Td>
        <Td style={tdStyle}><FaEdit onClick={()=>{
            handleUpdate(el)
            onOpen()
            // navigate(`/test/${el.id}`)
            }}/></Td>
        <Td style={tdStyle}>{el.product_name}</Td>
        <Td style={tdStyle}>{el.model_name}</Td>
        <Td style={tdStyle}>{el.brand_name}</Td>
        <Td style={tdStyle}>{el.price}</Td>
        <Td style={tdStyle}><Image src={el.image_url} h="60px" w="100px"/></Td>
        
        <Td style={tdStyle}><Button variant={"outline"} _hover={{color:"red",backgroundColor:"#D5D6D7"}} backgroundColor="red.400" color={"white"} cursor={"pointer"} onClick={()=>{
            // dispatch(removeCompItem(el.id))
            removeData(el.id)
        }}>Remove</Button></Td>
      </Tr>
            ))
        }
      
      
    </Tbody>
    
  </Table>
</TableContainer>

<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Update</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
          <FormControl mr="5%">
          <FormLabel  fontWeight={'normal'}>
            Product Name
          </FormLabel>
          <Input  value={prod?.product_name} name="product_name" placeholder="First name" onChange={handleChange}/>
        </FormControl>

        <FormControl mt="2%">
        <FormLabel fontWeight={'normal'}>
          size
        </FormLabel>
        <Select
          id="size"
          name="size"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md" 
          value={prod?.size} onChange={handleChange}> 
          <option value={"Medium"}>Medium</option>
          <option value={"Wide"}>Wide</option>
          <option value={"Small"}>Small</option>
          <option value={"Extra Wide"}>Extra Wide</option>
          <option  value={"Narrow"}>Narrow</option>

        </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel fontWeight={'normal'}>
          Category
        </FormLabel>
        <Select
          id="size"
          name="category"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md" value={prod?.category} onChange={handleChange}>
          <option value={"all_kids_glasses"}>All Kids Glasses</option>
          <option value={"all_computer_glasses"}>All Computer Glasses</option>
         </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel  fontWeight={'normal'}>
          Brand Name
        </FormLabel>
        <Select
     
          name="brand_name"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md" value={prod?.brand_name} onChange={handleChange}>
          <option value={"LENSKART HUSTLR"}>LENSKART HUSTLR</option>
          <option value={"Lenskart Blu"}>Lenskart Blu</option>
          <option value={"John Jacobs Computer Glasses"}>John Jacobs Computer Glasses</option>
          <option value={"Vincent Chase Computer Glasses"}>Vincent Chase Computer Glasses</option>
          <option value={"Lenskart Air Computer Glasses"}>Lenskart Air Computer Glasses</option>
          <option value={"Hooper"}>Hooper</option>
         

        </Select>
      </FormControl>

        <FormControl>
      <FormLabel  fontWeight={'normal'}>
            Image
          </FormLabel>
          <Input type={"text"} id="image_url" value={prod?.image_url} name="image_url" onChange={handleChange} placeholder="Image " />
      </FormControl> 


        <FormControl>
      <FormLabel  fontWeight={'normal'}>
            Price
          </FormLabel>
          <Input type={"number"} value={prod?.price} name="price" onChange={handleChange} placeholder="Price " />

         
      </FormControl>

        <FormControl mt="2%">
        <FormLabel  fontWeight={'normal'}>
          Model Name
        </FormLabel>
        <Select
           placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          name="model_name"
          rounded="md"
          value={prod?.model_name}
          onChange={handleChange}
          >
          <option>HP E10082</option>
          <option>HP E10038M</option>
          <option>HP E10044L</option>
          <option>HP E10088</option>
          <option>LB E14058-H</option>
          <option>LB E13738</option>
          <option>JJ E11515</option>
         </Select>
      </FormControl>


          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={()=>{
                dispatch(updateItemComp(prod))
                // onClose()
            }}>Update Product</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ComputerGlassPanel