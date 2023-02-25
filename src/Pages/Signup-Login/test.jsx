import { Box } from '@chakra-ui/layout'
import React from 'react'

const Test = () => {
  return (
    <div>
        <Box width={"100%"} backgroundColor="transperant" opacity={"0.3"} border="1px solid red" p="1rem" h="100vh" position={"fixed"} zIndex="100" >

            <Box width="50%" m="auto" h="500px" backgroundColor={"gray"}  zIndex={101}>
                asdfghjk
            </Box>

        </Box>
    </div>
  )
}

export default Test