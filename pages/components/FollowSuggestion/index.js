import { Container, Info, FollowButton } from "./styles";

const FollowSuggestion = ({ name, nickname }) => {
  // object destructuring
  return (
    <Container>
      <div>
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton>Follow</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
