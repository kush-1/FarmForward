import { useState } from "react";
import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from "@chakra-ui/react";

const CreateFarmPage = () => {
    const [newFarm, setNewFarm] = useState({
        name: "",
        location: "",
        type: "",
        acreage: "",
        image: "",
        phone: "",
        email: "",
    });

    const handleAddFarm = () => {
        console.log(newFarm);
    }

    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={20}>
                    Create New Farm Listing
                </Heading>

                <Box 
                    w={"full"} bg={useColorModeValue("","green.800")}
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
                            placeholder = "Type"
                            name = "type"
                            value = {newFarm.type}
                            onChange = {(e) => setNewFarm({ ...newFarm, location: e.target.value})}
                        />
                        <Input 
                            placeholder="Acreage"
                            name="acreage"
                            type = 'number'
                            value={newFarm.acreage}
                            onChange={(e)=>setNewFarm({...newFarm, acreage: e.target.value})}
                        />
                        <Input 
                            placeholder="Image URL"
                            name="image"
                            value={newFarm.image}
                            onChange={(e)=>setNewFarm({...newFarm, image: e.target.value})}
                        />
                        <Input
                            placeholder = "Phone Number"
                            name = "phone"
                            value = {newFarm.phone}
                            onChange = {(e) => setNewFarm({ ...newFarm, phone: e.target.value})}
                        />
                        <Input
                            placeholder = "Email Address"
                            name = "email"
                            value = {newFarm.email}
                            onChange = {(e) => setNewFarm({ ...newFarm, email: e.target.value})}
                        />
                        <Button colorScheme="green" onClick={handleAddFarm} w="full">
                            Add Farm
                        </Button>
                    </VStack>

                </Box>
            </VStack>
        </Container>
    )
}

export default CreateFarmPage