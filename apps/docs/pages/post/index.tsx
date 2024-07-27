import React, { memo, FC } from "react";
import PostsContainerClient from "./components/client/posts.container";

type PostPageProps = {};

const PostPage: FC<PostPageProps> = () => {
  return <PostsContainerClient />;
};

export default memo(PostPage);
