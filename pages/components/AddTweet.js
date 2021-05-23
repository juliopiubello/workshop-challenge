import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { withApollo } from '@apollo/client/react/hoc';
import { gql, useMutation } from '@apollo/client';

const ADD_TWEET = gql`
  mutation ADD_TWEET($object: Tweets_insert_input!) {
    insert_Tweets_one(object: $object) {
      id
      creator_id
    }
  }
`

const AddTweet = ({ client }) => {
  const { 
    user, 
    isAuthenticated, 
    isLoading, 
    loginWithRedirect, 
    getAccessTokenSilently,
    logout
  } = useAuth0();

  const [addPost, { data }] = useMutation(ADD_TWEET);
  const [tweet, setTweet] = useState();


  const submitTweet = () => {

    console.log({
      object: {
        content: tweet,
        private: false,
        creator_id: user.sub 
      }
    })

    addPost({ variables: {
      object: {
        content: tweet,
        private: false,
        creator_id: user.sub 
      }
    }})

    setTweet('');
    client.clearStore();

    return
  }

  const setToken = async () => {
    const token = await getAccessTokenSilently();
    console.log({token});
    localStorage.setItem('token', token);
    client.clearStore();
    console.log('hora q esse roda');
  }

  useEffect(() => {
    console.log({isAuthenticated})
    console.log({user});

    if ( isAuthenticated ){
      setToken();
    }
  }, [isAuthenticated, isLoading])

  if ( isLoading ) return <div>Loading...</div>

  if ( !isAuthenticated ) {
    return (
      <div>
        <div class="alert alert-warning">
          Você precisa estar autenticado para poder postar tweets. <a href="#" onClick={() => loginWithRedirect()}>Efetuar login.</a>
        </div>
      </div>
    )
  }

  return (
    <div>
      <textarea onChange={e => setTweet(e.target.value)} value={tweet} />
      <button type="button" onClick={() => submitTweet()} >Tweet</button>
      <button type="button" onClick={async () => { await logout(); client.clearStore()}}>Logout</button>
    </div>
  )
}

export default withApollo(AddTweet);