import { Box, Button, Container, Heading, Input, VStack, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';

const Farmland = () => {
    const [newFarmland, setNewFarmland] = useState({
        farmName: "",
        farmLocation: "",
        farmType: "",
        farmAcreage: "",
        phoneNumber: "",
        emailAddress: "",
    });

    const handleAddFarmland = () => {
        console.log(newFarmland);
    };

    return (
        <Container maxW = {"container.sm"}>
            <VStack spacing = {8}>
                <Heading as = {"h1"} size = {"2xl"} textAlign = {"center"} mb = {8}>
                    Create New Farmland
                </Heading>

                <Box
                    w = {"full"} bg = {useColorModeValue("white", "gray.800")}
                    p = {6} rounded = {"lg"} 
                    shadow = {"md"}>
                    <VStack spacing = {4}>
                        <Input 
                            placeholder = 'Farm Name'
                            name = 'farmName'
                            value = {newFarmland.farmName}
                            onChange = {(e) => setNewProduct({ ... newProduct, farmName: e.target.value})}
                        />
                        <Input 
                            placeholder = 'Farm Location'
                            name = 'farmLocation'
                            value = {newFarmland.farmLocation}
                            onChange = {(e) => setNewProduct({ ... newProduct, farmLocation: e.target.value})}
                        />
                        <Input 
                            placeholder = 'Farm Type'
                            name = 'farmType'
                            value = {newFarmland.farmType}
                            onChange = {(e) => setNewProduct({ ... newProduct, farmType: e.target.value})}
                        />
                        <Input 
                            placeholder = 'Farm Acreage'
                            name = 'farmAcreage'
                            type = 'number'
                            value = {newFarmland.farmAcreage}
                            onChange = {(e) => setNewProduct({ ... newProduct, farmAcreage: e.target.value})}
                        />
                        <Input 
                            placeholder = 'Phone Number'
                            name = 'phoneNumber'
                            value = {newFarmland.phoneNumber}
                            onChange = {(e) => setNewProduct({ ... newProduct, phoneNumber: e.target.value})}
                        />
                        <Input 
                            placeholder = 'Email Address'
                            name = 'emailAddress'
                            value = {newFarmland.emailAddress}
                            onChange = {(e) => setNewProduct({ ... newProduct, emailAddress: e.target.value})}
                        />

                        <Button colorScheme = 'blue' onClick = {handleAddFarmland} w = 'full'>
                            Add Farmland
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};
export default Farmland;