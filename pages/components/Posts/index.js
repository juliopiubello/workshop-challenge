import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Post from '../Post';

import {
    WrapperPosts,
    Posts,
    // Post,
    Header,
    Text,
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
          <Post key={index} tweet={tweet}>
            {/* <Header>
              <strong>{tweet.User?.name}</strong>
            </Header>
            <Text>
              {tweet.content}
            </Text> */}

          </Post>
        ))}
      </Posts>
    </WrapperPosts>
  );
};
