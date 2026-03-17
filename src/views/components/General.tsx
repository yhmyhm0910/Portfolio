// Chakra imports
import { Link, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import { useState } from "react";

// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
  const { ...rest } = props;
  const [isHovered, setIsHovered] = useState(true);

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  //const textColorSecondary = 'gray.400';
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset",
  );

  const scrollToProjects = () => {
    const element = document.getElementById("Projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSkills = () => {
    const element = document.getElementById("Projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card marginTop="1vh" boxShadow={cardShadow} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="3xl"
        mt="10px"
        mb="4px"
      >
        About Me
      </Text>
      <Text color={textColorPrimary} fontSize="l" mb="2vh" marginRight="2vw">
        Software engineer with full-stack experiences, building production
        features and maintaining e-commerce platforms. Proficient in TypeScript,
        Express.js, Svelte, Firestore, and Cloudflare D1/R2, with hands-on
        experience in caching strategies, API security, and database schema
        design. Passionate about delivering reliable, scalable, and secure
        systems, seeking to grow in backend and system design roles.
        <br />
        <br />
        You can find my side projects / authorized projects details and video
        demostrations down&nbsp;
        <span
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={scrollToProjects}
        >
          here
        </span>
        !
      </Text>
    </Card>
  );
}
