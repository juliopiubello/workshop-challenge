import React from "react";

import Button from "../Button";

import {
  Container,
  Topside,
  TwitterLogo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Bottomside,
  Avatar,
  ProfileData,
  ExitIcon,
} from "./styles";

const MenuBar = () => {
  return (
    <Container>
      <Topside>
        <TwitterLogo />

        <MenuButton>
          <HomeIcon />
          <span>Homepage</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>
      </Topside>

      <Bottomside>
        <Avatar />
        <ProfileData>
          {/* TODO: set this data dynamically */}
          <strong>Julio</strong>
          <span>@julio</span>
        </ProfileData>
        <ExitIcon />
      </Bottomside>
    </Container>
  );
};

export default MenuBar;
