import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import {
    WrapperPosts,
    Posts,
    Post,
    Header,
} from './styles.js'

const GET_TWEETS = gql`
  query GET_TWEETS {
    Tweets {
      content
      User {
        name
      }
    }
  }
`;

export default () => {
  const { data, loading, error } = useQuery(GET_TWEETS);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong, try again later</div>;

  return (
    <WrapperPosts>
      <Posts>
        {data.Tweets.map((tweet, index) => (
          <Post key={index}>
            <Header>
              <strong>{tweet.User?.name}</strong>
              <span>{tweet.content}</span>
            </Header>
          </Post>
        ))}
      </Posts>
    </WrapperPosts>
  );
};
