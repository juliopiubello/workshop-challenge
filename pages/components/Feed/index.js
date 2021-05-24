import React from "react";

import AddTweet from "../AddTweet";
import Posts from "../Posts";

import {
  Container,
  Header,
  BackIcon,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from "./styles";

const Feed = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <span>Feed</span>
      </Header>

      <AddTweet />
      <Posts />

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Feed;
