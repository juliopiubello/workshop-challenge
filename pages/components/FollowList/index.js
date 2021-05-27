import React from "react";

import { Container, Item, Title } from "./styles";

/** Displays FollowSuggestion components */
const FollowList = ({ elements }) => {
  return (
    <Container>
      <Item>
        <Title>Who to follow</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default FollowList;
