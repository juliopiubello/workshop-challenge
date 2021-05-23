import { useEffect } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';

const WrapperPosts = styled.div`
  display: flex;
  flex-direction: column;
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
        email
      }
    }
  }
`

export default () => {

  const { data, loading, error} = useQuery(GET_TWEETS);

  if (loading) return <div>Loading...</div>

  if (error) return <div>Something went wrong, try again later</div>

  return (
    <WrapperPosts className="rounded mb-4">
      {
        data.Tweets.map((tweet, index) => (
          <Post key={index} className="p-2">
            <img src={tweet.User?.picture} alt="" />
            <p className="fw-bold">{tweet.User?.name} <span className="fw-light fst-italic">{tweet.User?.email}</span></p>
            <p>{tweet.content}</p>
          </Post>
        ))
      }
    </WrapperPosts>
  )
}