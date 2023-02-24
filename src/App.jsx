import { Box, Button, Center, Heading, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { TfiLinkedin, TfiLink, TfiGithub } from "react-icons/tfi";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import AllRoutes from "./Components/AllRoutes";

import { useState } from "react";
import Dashboard from "./Pages/Admin/Dashboard";

import Hover from "./Components/Navbar/Hover";
import Footer from "./Components/Footer/Footer";


function App() {
 
  
  return (
    <div>

      
     

      <AllRoutes/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
