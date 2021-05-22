import styled from 'styled-components';

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

export default () => {
  return (
    <WrapperPosts>
      <Post>
        <p>Nome</p>
        <p>Conteudo do post</p>
      </Post>
      <Post>
        <p>Nome</p>
        <p>Conteudo do post</p>
      </Post>
    </WrapperPosts>
  )
}