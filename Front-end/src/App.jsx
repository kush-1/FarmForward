import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';

import Farmland from "./pages/Farmland";
import HomePage from "./pages/HomePage";
import Navbar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Box minH = {"100vh"} bg = {useColorModeValue("yellow.100", "green.900")}>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/farmland" element = {< Farmland />} />
        <Route path = "/about" element = {<AboutPage />} />
      </Routes>
    </Box>
  );
}

export default App;
