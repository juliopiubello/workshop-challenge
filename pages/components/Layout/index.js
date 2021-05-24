import React from "react";
import styled from 'styled-components';

import Feed from "../Feed";

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Feed />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;


const Container = styled.div` // the full page
    background: var(--primary);
`;

const Wrapper = styled.div`
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
`;
