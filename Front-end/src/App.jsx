import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';

import CreateFarmPage from "./pages/CreateFarmPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Box minH = {"100vh"} bg = {useColorModeValue("yellow.100", "green.900")}>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path="/create" element ={<CreateFarmPage />} />
        <Route path = "/about" element = {<AboutPage />} />
      </Routes>
    </Box>
  );
}

export default App;
