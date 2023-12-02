import { Flex, Avatar, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="as a Programmer" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          oleprogrammer_
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        style={{ textDecoration: "none" }}
      >
        Log Out
      </Link>
    </Flex>
  );
}

export default SuggestedHeader;
