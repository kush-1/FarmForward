import { Container, Flex, Text } from "@chakra-ui/react"

const AboutPage = () => {
    return (
        <Container minH = { "600px"} px = {4}>
            <Flex
                h = {16}
                alignItems = {"center"}
                justifyContent = {"space-between"}
                flexDir = {{
                    base: "column",
                    sm: "row",
                }} >
            </Flex>

            <Text
                textAlign = { "center" }
                fontSize={{ base: "24", sm: "30" }}
                bgClip= { 'text' }
            >
                James can you please write this please please <br />
                please please please please please please please <br />
                please!!!
            </Text>
        </Container>
    );
}
export default AboutPage