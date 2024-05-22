import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  const cardProp = {
    img: imageSrc,
    title: title,
    desc: description,
  };
  return (
    <Box borderRadius="lg" overflow="hidden" maxW="lg">
      <Image src={cardProp.img} alt="project_image" />
      <Box p="6" bg="white" color="#333">
        <Heading size={15}>{cardProp.title}</Heading>
        <VStack mt={2}>
          <Text>{cardProp.desc}</Text>
          <HStack pr={374}>
            <Text>See More</Text>
            <FontAwesomeIcon icon={faArrowRight} />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

// Implement the UI for the Card component according to the instructions.
// You should be able to implement the component with the elements imported above.
// Feel free to import other UI components from Chakra UI if you wish to.

export default Card;
