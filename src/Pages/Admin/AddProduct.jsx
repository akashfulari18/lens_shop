import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Form1 = ({productDetails,setProductDetails}) => {
//   const [show, setShow] = React.useState(false);
//   const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
       Add New Product
      </Heading>
      
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Product Name
          </FormLabel>
          <Input id="first-name" value={productDetails.title} onChange={(e)=>setProductDetails({...productDetails,product_name:e.target.value})} placeholder="Product Name" />
        </FormControl>

        
      
        <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Brand Name
        </FormLabel>
        <Select
          id="size"
          name="size"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md" value={productDetails.brand_name} onChange={(e)=>setProductDetails({...productDetails,brand_name:e.target.value})}>
          <option value={"LENSKART HUSTLR"}>LENSKART HUSTLR</option>
          <option value={"Lenskart Blu"}>Lenskart Blu</option>
          <option value={"John Jacobs Computer Glasses"}>John Jacobs Computer Glasses</option>
          <option value={"Vincent Chase Computer Glasses"}>Vincent Chase Computer Glasses</option>
          <option value={"Lenskart Air Computer Glasses"}>Lenskart Air Computer Glasses</option>
          <option value={"Hooper"}>Hooper</option>
         

        </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Category
        </FormLabel>
        <Select
          id="size"
          name="size"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md" value={productDetails.category} onChange={(e)=>setProductDetails({...productDetails,category:e.target.value})}>
          <option value={"all_kids_glasses"}>All Kids Glasses</option>
          <option value={"all_computer_glasses"}>All Computer Glasses</option>
         </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
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
          value={productDetails.size} onChange={(e)=>setProductDetails({...productDetails,size:e.target.value})}> 
          <option value={"Medium"}>Medium</option>
          <option value={"Wide"}>Wide</option>
          <option value={"Small"}>Small</option>
          <option value={"Extra Wide"}>Extra Wide</option>
          <option  value={"Narrow"}>Narrow</option>

        </Select>
      </FormControl>

     
    </>
  );
};


const Form3 = ({productDetails,setProductDetails}) => {
  return (
    <>
     <FormControl>
      <FormLabel htmlFor="price" fontWeight={'normal'}>
            Image
          </FormLabel>
          <Input id="image_url" value={productDetails.image_url} onChange={(e)=>setProductDetails({...productDetails,image_url:e.target.value})} placeholder="Image " />
      </FormControl> <FormControl>
      <FormLabel htmlFor="price" fontWeight={'normal'}>
            Price
          </FormLabel>
          <Input id="price" value={productDetails.price} onChange={(e)=>setProductDetails({...productDetails,price:e.target.value})} placeholder="Price " />
      </FormControl>
         <FormControl mt="2%">
        <FormLabel htmlFor="model_no" fontWeight={'normal'}>
          Model Name
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
          value={productDetails.model_name}
          onChange={(e)=>setProductDetails({...productDetails,model_name:e.target.value})}
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
      
    </>
  );
};


const initialProduct={
category:"",
brand_name:"",
product_name:"",
model_name:"",
size:"",
price:"",
image_url:"",

}

export default function AddProduct() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [loading,setLoading]=useState(false)
  const [progress, setProgress] = useState(50);
  const [productDetails,setProductDetails]=useState(initialProduct);

  const dispatch = useDispatch()

  const postKidsGlass =async(item)=>{
      await axios.post(`https://lesn-shop-server.onrender.com/all_kids_glasses`,item).then((res)=>console.log("Success",res)).catch((e)=>console.log(e))
  }
  const postComputerGlass =async(item)=>{
      await axios.post(`https://lesn-shop-server.onrender.com/all_computer_glasses`,item).then((res)=>console.log("Success",res)).catch((e)=>console.log(e))
  }


  const handleSubmit =()=>{
    // e.preventDefault()
    
    if(productDetails.category === "all_kids_glasses"){
       postKidsGlass(productDetails)
    // console.log("true")
    }else if(productDetails.category==="all_computer_glasses"){
        postComputerGlass(productDetails)
        // console.log("false")
    }
    setTimeout(()=>{
        toast({
            title:'Successfully Added.',
            description:'Product added successfully.',
            status:'success',
            duration:1500,
            isClosable:true

        })
        setLoading(false);
        setStep(1);
        setProgress(50)
    },2000)
    setLoading(true)
    setProductDetails(initialProduct)
    // console.log(productDetails)
}
return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          colorScheme={"linkedin"}
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 productDetails={productDetails} setProductDetails={setProductDetails}/> : <Form3 productDetails={productDetails} setProductDetails={setProductDetails} />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 50);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                isLoading={loading}
                loadingText='Submitting'
                onClick={handleSubmit}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}