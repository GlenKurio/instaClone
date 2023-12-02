import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image, AspectRatio } from "@chakra-ui/react";

function FeedPost({ img, avatar, username }) {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box borderRadius={6} overflow={"hidden"}>
        <AspectRatio maxW={"full"} ratio={1 / 1}>
          <Image src={img} alt="user picture from profile" />
        </AspectRatio>
      </Box>
      <PostFooter username={username} />
    </>
  );
}

export default FeedPost;
