import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Heading,
    HStack,
    IconButton,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useColorModeValue,
    useDisclosure,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { useFarmStore } from "../store/farm";
import { useState } from "react";

const FarmCard = ({ farm }) => {
    const [updatedFarm, setUpdatedFarm] = useState(farm);

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const { deleteFarm, updateFarm } = useFarmStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDeleteFarm = async (pid) => {
        const { success, message } = await deleteFarm(pid);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleUpdateFarm = async (pid, updatedFarm) => {
        const { success, message } = await updateFarm(pid, updatedFarm);
        onClose();
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: "Farm successfully updated",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
        >
            <Image src={farm.image} alt={farm.name} h={48} w='full' objectFit='cover' />

            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {farm.name}
                </Heading>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    {farm.location}
                </Text>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    {farm.type} 
                </Text>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    {farm.size} Acres
                </Text>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    {farm.phone}
                </Text>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    {farm.email}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
                    <IconButton
                        icon={<DeleteIcon />}
                        onClick={() => handleDeleteFarm(farm._id)}
                        colorScheme='red'
                    />
                </HStack>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader>Update Farm</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder="Farm Name"
                                name="name"
                                value={updatedFarm.name}
                                onChange={(e) => setUpdatedFarm({ ...updatedFarm, name: e.target.value })}
                            />
                            <Input
                                placeholder="Location"
                                name="location"
                                value={updatedFarm.location}
                                onChange={(e) => setUpdatedFarm({ ...updatedFarm, location: e.target.value })}
                            />
                            <Input
                                placeholder="Type"
                                name="type"
                                value={updatedFarm.type}
                                onChange={(e) => setUpdatedFarm({ ...updatedFarm, type: e.target.value })}
                            />
                            <Input
                                    placeholder="Size"
                                    name="size"
                                    value={updatedFarm.size}
                                    onChange={(e) => setUpdatedFarm({ ...updatedFarm, size: e.target.value })}
                                />
                            
                            <Input
                                placeholder="Image URL"
                                name="image"
                                value={updatedFarm.image}
                                onChange={(e) => setUpdatedFarm({ ...updatedFarm, image: e.target.value })}
                            />
                            <Input
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={updatedFarm.phone}
                                    onChange={(e) => setUpdatedFarm({ ...updatedFarm, phone: e.target.value })}
                                />
                            
                            <Input
                                placeholder="Email Address"
                                name="email"
                                value={updatedFarm.email}
                                onChange={(e) => setUpdatedFarm({ ...updatedFarm, email: e.target.value })}
                            />
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            mr={3}
                            onClick={() => handleUpdateFarm(farm._id, updatedFarm)}
                        >
                            Update
                        </Button>
                        <Button variant='ghost' onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};
export default FarmCard;