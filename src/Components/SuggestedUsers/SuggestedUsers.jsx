import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"gray.500"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See all
        </Text>
      </Flex>

      <SuggestedUser
        name="Den Abramov"
        followers={1798}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Ryan Florence"
        followers={598}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Christian Nwamba"
        followers={29798}
        avatar="https://bit.ly/code-beast"
      />

      <Box fontSize={12} color={"gray.500"} mt={5}>
        &copy; 2023 Built By{" "}
        <Link
          href="https://www.linkedin.com/in/oleh-minko-0276b2223/"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          oleprogrammer
        </Link>
      </Box>
    </VStack>
  );
}

export default SuggestedUsers;
