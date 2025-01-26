import { useState } from "react";
import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from "@chakra-ui/react";

const CreateFarmPage = () => {
    const [newFarm, setNewFarm] = useState({
        name: "",
        location: "",
        size: "",
        image: "",
    });

    const handleAddFarm = () => {
        console.log(newFarm);
    }

    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                    Create New Farm Listing
                </Heading>

                <Box 
                    w={"full"} bg={useColorModeValue("white","gray.800")}
                    p={6} founded={"lg"} shadow={"md"}    
                >
                    <VStack spacing={4}>
                        <Input 
                            placeholder="Farm Name"
                            name="name"
                            value={newFarm.name}
                            onChange={(e)=>setNewFarm({...newFarm, name: e.target.value})}
                        />
                        <Input 
                            placeholder="Location"
                            name="location"
                            value={newFarm.location}
                            onChange={(e)=>setNewFarm({...newFarm, location: e.target.value})}
                        />
                        <Input 
                            placeholder="Size"
                            name="size"
                            value={newFarm.size}
                            onChange={(e)=>setNewFarm({...newFarm, size: e.target.value})}
                        />
                        <Input 
                            placeholder="Image URL"
                            name="image"
                            value={newFarm.image}
                            onChange={(e)=>setNewFarm({...newFarm, image: e.target.value})}
                        />
                        <Button colorScheme="blue" onClick={handleAddFarm} w="full">
                            Add Farm
                        </Button>
                    </VStack>

                </Box>
            </VStack>
        </Container>
    )
}

export default CreateFarmPage