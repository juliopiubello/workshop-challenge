import { useEffect } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';

const WrapperPosts = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid #dedede;
`;

const Post = styled.div`
  width: 100%;
  border-bottom: 1px solid #dedede;
  display: flex;
  flex-direction: column;
`;

const GET_TWEETS = gql`
  query GET_TWEETS {
    Tweets {
      content
      User {
        name
      }
    }
  }
`

export default () => {

  const { data, loading, error} = useQuery(GET_TWEETS);

  if (loading) return <div>Loading...</div>

  if (error) return <div>Something went wrong, try again later</div>

  return (
    <WrapperPosts>
      {
        data.Tweets.map((tweet, index) => (
          <Post key={index}>
            <p>{tweet.User.name}</p>
            <p>{tweet.content}</p>
          </Post>
        ))
      }
    </WrapperPosts>
  )
}