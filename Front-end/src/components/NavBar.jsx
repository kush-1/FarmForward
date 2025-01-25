import { Container, Button, HStack, Flex, Text} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";

const NavBar = () => {
    return (
        <Container maxW = {"1140px"} px = {4}>
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
                    >
                    
                    <Link to = { "/" }> Farms </Link>

                </Text>

                <HStack spacing = { 2 } alignItems = { "center" }>
                    <Link to = { "/create" }>
                        <Button>
                            <PlusSquareIcon fontSize = {20} />
                        </Button>
                    </Link>
                </HStack>
            </Flex>
        </Container>
    );
};
export default NavBar;