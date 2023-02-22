import { Box, Button, Center, Heading, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { TfiLinkedin, TfiLink, TfiGithub } from "react-icons/tfi";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import AllRoutes from "./Components/AllRoutes";

import { useState } from "react";
import Dashboard from "./Pages/Admin/Dashboard";

import TopNav from "./Components/Navbar/TopNav";
import Hover from "./Components/Navbar/Hover";


function App() {
 
  
  return (
    <div>

      
     
      <TopNav />

      <AllRoutes/>
      
    </div>
  );
}

export default App;
