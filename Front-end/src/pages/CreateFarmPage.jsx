import { useState } from "react";
import { Box, Button, Container, Heading, Input, useColorModeValue, VStack, useToast } from "@chakra-ui/react";
import { useFarmStore } from "../store/farm";


const CreateFarmPage = () => {
    const [newFarm, setNewFarm] = useState({
        name: "",
        location: "",
        type: "",
        size: "",
        image: "",
        phone: "",
        email: "",
    });

    const toast = useToast();

    const { createFarm } = useFarmStore()
    const handleAddFarm = async (e) => {
        e.preventDefault();
        const { success, message } = await createFarm(newFarm)
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true
            })
        }
        else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true
            })
        }
        setNewFarm({ name: "", location: "", type:"", size: "", image: "", phone:"", email:""});
    }

    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={20}>
                    Create New Farm Listing
                </Heading>

                <Box
                    w={"full"} bg={useColorModeValue("white", "green.800")}
                    p={6} founded={"lg"} shadow={"md"}
                >
                    <VStack spacing={4}>
                        <Input
                            placeholder="Farm Name"
                            name="name"
                            value={newFarm.name}
                            onChange={(e) => setNewFarm({ ...newFarm, name: e.target.value })}
                        />
                        <Input
                            placeholder="Location"
                            name="location"
                            value={newFarm.location}
                            onChange={(e) => setNewFarm({ ...newFarm, location: e.target.value })}
                        />
                        <Input
                            placeholder="Type"
                            name="type"
                            value={newFarm.type}
                            onChange={(e) => setNewFarm({ ...newFarm, type: e.target.value })}
                        />
                        <Input
                                placeholder="Size"
                                name="size"
                                type = "number"
                                value={newFarm.size}
                                onChange={(e) => setNewFarm({ ...newFarm, size: e.target.value })}
                            />
                        
                        <Input
                            placeholder="Image URL"
                            name="image"
                            value={newFarm.image}
                            onChange={(e) => setNewFarm({ ...newFarm, image: e.target.value })}
                        />
                       <Input
                                placeholder="Phone Number"
                                name="phone"
                                value={newFarm.phone}
                                onChange={(e) => setNewFarm({ ...newFarm, phone: e.target.value })}
                            />
                        
                        <Input
                            placeholder="Email Address"
                            name="email"
                            value={newFarm.email}
                            onChange={(e) => setNewFarm({ ...newFarm, email: e.target.value })}
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