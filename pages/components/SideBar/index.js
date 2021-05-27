import FollowList from "../FollowList";
import FollowSuggestion from "../FollowSuggestion";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

/** Right sidebar */
const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <FollowList
          title="Who to follow"
          elements={[
            // TODO: populate this array with profiles from Hasura
            <FollowSuggestion name="Google" nickname="@Google" />,

            <FollowSuggestion name="Elon Musk" nickname="@elonmusk" />,

            <FollowSuggestion name="GitStart" nickname="@GitStartHQ" />,
          ]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
