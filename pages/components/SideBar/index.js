import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
} from "./styles";

/** Right sidebar */
const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on Twitter" />
        <SearchIcon />
      </SearchWrapper>
    </Container>
  );
};

export default SideBar;
