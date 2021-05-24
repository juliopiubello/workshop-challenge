import { useEffect } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';

const WrapperPosts = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%); // shortest value between 601px and 100% of current window

  @media (min-width: 500px) {
      border-left: 1px solid var(--outline);
      border-right: 1px solid var(--outline);
  }
`;

const Posts = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0; /* this element will not shrink */
`;

const Post = styled.div`
  width: 100%;
  border-bottom: 1px solid #dedede;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    align-items: center;

    font-size: 15px;
    white-space: nowrap;

    > strong {
        margin-right: 5px;
    }

    > span, time {
        color: var(--gray);
    }

    > strong, span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
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
      <Posts>
      {
        data.Tweets.map((tweet, index) => (
          <Post key={index}>
            <Header>
              <strong>{tweet.User?.name}</strong>
              <span>{tweet.content}</span>
            </Header>
          </Post>
        ))
      }
      </Posts>
    </WrapperPosts>
  )
}