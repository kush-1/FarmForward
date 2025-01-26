import { Container, Button, HStack, Flex, Text, useColorMode} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { LuCarrot } from "react-icons/lu";
import { FaCarrot } from "react-icons/fa";

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container maxW = {"700px"} px = {4}>
            <Flex
                h = {16}
                alignItems = {"center"}
                justifyContent = {"space-between"}
                flexDir = {{
                    base: "column",
                    sm: "row",
                }} >

                <Text
                    bgGradient='linear(to-l, #5d6841, #a7d93d)'
                    bgClip= { 'text' }
                    textTransform = { "uppercase" }
                    textAlign = { "center" }
                    fontSize={{ base: "50", sm: "64" }}
                    fontWeight={ "bold" }
                    paddingRight = "6"
                    >
                    
                    <Link to = { "/" }> FarmForward </Link>

                </Text>

                <HStack spacing = { 3 } alignItems = { "right" } paddingTop = "2">
                    <Link to = { "/create" }>
                        <Button>
                            <Text 
                                fontSize = {18}
                                bgGradient='linear(to-r,yellow.500, green.600)'
                                bgClip = { 'text' }>

                                New
                            </Text>
                        </Button>
                    </Link>
                    <Link to = { "/about" }>
                        <Button>
                            <Text 
                                fontSize = {18}
                                bgGradient='linear(to-r,yellow.500, green.600)'
                                bgClip = { 'text' }>

                                About
                            </Text>
                        </Button>
                    </Link>
                    <Button onClick = { toggleColorMode }> {colorMode === "light" ? <FaCarrot /> :
                        <LuCarrot size = "20" />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};
export default NavBar;