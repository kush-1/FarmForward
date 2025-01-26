import { Text, Box, Image } from "@chakra-ui/react"

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
                Our Mission
            </Text>

            <Box paddingTop = "5">
                <Text 
                    fontSize = {"22"}
                    fontWeight = {"bold"}
                    textAlign = {"center"}
                    bgGradient = {"linear(to-r, yellow.400, green.600)"}
                    bgClip = {"text"}
                >
                    Farm Forward is a nonprofit organization committed to securing the future <br />
                    of agriculture by connecting the next generation of farmers with retiring operators <br />
                    and landowners. Through our innovative database and community-driven approach, we aim <br />
                    to preserve agricultural lands, sustain essential farming knowledge, and ensure the <br />
                    infrastructure necessary for thriving agricultural systems. Our mission is to build <br />
                    relationships that safeguard the transfer of farmland and foster sustainable food <br />
                    systems vital to the health and well-being of communities worldwide.
                </Text>
            </Box>

            <Box height = {"300"} w = {"300"} align = {"center"} paddingTop = {12}>
                <Image height="350px" 
                    align = "center"
                    src="https://agrilinks.org/sites/default/files/styles/featured/public/media/image/CRSF2F_TimorLeste_CDC.webp?h=10d202d3"
                />
            </Box>
        </Box>
    );
};
export default AboutPage;
