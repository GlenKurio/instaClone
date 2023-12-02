import {
  Flex,
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

function PostFooter({ username }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(100);
  function handleLike() {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  }

  return (
    <>
      <Flex alignItems={"center"} gap={1} w={"full"} pt={4} mt={"auto"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={10}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Text fontWeight={600} fontSize="sm">
          {likes}
        </Text>
        <Box cursor={"pointer"} fontSize={18} ml={4}>
          <CommentLogo />
        </Box>
        <Text fontWeight={600} fontSize="sm">
          1000
        </Text>
      </Flex>
      <Text fontSize="sm" fontWeight={"700"} mt={2}>
        {username}
        <Text as="span" fontWeight={400} ml={2}>
          Feeling Good ...
        </Text>
      </Text>
      <Text fontSize="sm" color={"gray"}>
        View all 1,000 comments
      </Text>

      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment ..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  );
}

export default PostFooter;
