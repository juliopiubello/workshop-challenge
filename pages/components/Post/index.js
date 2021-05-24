import React from "react";

import {
  Container,
  Body,
  Content,
  Header,
  Text,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./styles";

/** Represents a Tweet */
const Post = ({tweet}) => {
  return (
    <Container>
      <Body>
        <Content>
          <Header>
            <strong>{tweet.User?.name}</strong>
          </Header>
          <Text>{tweet.content}</Text>

          <Icons>
            <Status>
              <CommentIcon />
              {/* TODO: number of comments */}
              10
            </Status>

            <Status>
              <RetweetIcon />
              {/* TODO: number of retweets */}
              50
            </Status>

            <Status>
              <LikeIcon />
              {/* TODO: number of likes */}
              90
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Post;
