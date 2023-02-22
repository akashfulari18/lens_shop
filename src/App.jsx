import { Box, Button, Center, Heading, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { TfiLinkedin, TfiLink, TfiGithub } from "react-icons/tfi";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import TopNav from "./Components/Navbar/TopNav";
import Hover from "./Components/Navbar/Hover";

function App() {
  
  
  return (
    <div>
      
      {/* <Navbar/> */}
      <TopNav />
      <AllRoutes/>
      
    </div>
  );
}

export default App;
