import {
  Container,
  VStack,
  Flex,
  SkeletonCircle,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

function FeedPosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2} userSelect={"none"}>
      {isLoading &&
        [0, 1, 2, 3].map((_, index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack
                gap={2}
                alignItems={"flex-start"}
                justifyContent={"center"}
              >
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <FeedPost
            img="/img1.webp"
            username="oleprogrammer"
            avatar="/img1.webp"
          />
          <FeedPost img="/img2.webp" username="lopuh" avatar="/img2.webp" />
          <FeedPost img="/img3.webp" username="sardina" avatar="/img3.webp" />
          <FeedPost img="/img4.webp" username="lolpoe" avatar="/img14.webp" />
        </>
      )}
    </Container>
  );
}

export default FeedPosts;
