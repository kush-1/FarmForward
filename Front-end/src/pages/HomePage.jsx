import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFarmStore } from "../store/farm";
import FarmCard from "../components/FarmCard";

const HomePage = () => {
    const { fetchFarms, farms } = useFarmStore();

	useEffect(() => {
		fetchFarms();
	}, [fetchFarms]);
	console.log("farms", farms);
    return (
        <Container maxW='container.xl' py={12}>
            <VStack spacing={8}>
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, yellow.400, green.600)"}
                    bgClip={"text"}
                    textAlign={"center"}
                >
                    Browse Farms
                </Text>
                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 1,
                        lg: 2,
                    }}
                    spacing={10}
                    w={"full"}
                >
                    {farms.map((farm) => (
                        <FarmCard key={farm._id} farm={farm} />
                    ))}
                </SimpleGrid>
                {farms.length === 0 && (
                    <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
                        No farms found {" "}
                        <Link to={"/create"}>
                            <Text as='span' color='green.600' _hover={{ textDecoration: "underline" }}>
                                Create a farm listing
                            </Text>
                        </Link>
                    </Text>
                )}
            </VStack>
        </Container>
    );
};

export default HomePage;