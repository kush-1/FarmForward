import { Text, Box } from "@chakra-ui/react"

const AboutPage = () => {
    return (
        <Box paddingTop = "20">
            <Text 
                fontSize = {"40"}
                fontWeight = {"bold"}
                textAlign = {"center"}
                bgGradient = {"linear(to-r, yellow.400, green.600)"}
                bgClip = {"text"}
            >
                <center>
                    Our Mission
                </center>
            </Text>

            <Box paddingTop = "5">
                <Text 
                    fontSize = {"22"}
                    fontWeight = {"bold"}
                    textAlign = {"center"}
                    bgGradient = {"linear(to-r, yellow.400, green.600)"}
                    bgClip = {"text"}
                >
                    <center>
                        Farm Forward is a nonprofit organization committed to securing the future <br />
                        of agriculture by connecting the next generation of farmers with retiring operators <br />
                        and landowners. Through our innovative database and community-driven approach, we aim <br />
                        to preserve agricultural lands, sustain essential farming knowledge, and ensure the <br />
                        infrastructure necessary for thriving agricultural systems. Our mission is to build <br />
                        relationships that safeguard the transfer of farmland and foster sustainable food <br />
                        systems vital to the health and well-being of communities worldwide.
                    </center>
                </Text>
            </Box>
        </Box>
    );
};
export default AboutPage;
