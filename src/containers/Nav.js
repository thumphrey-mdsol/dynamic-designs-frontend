import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'





const Nav = () => {
  return (
    <div className="navbar">
      <Segment inverted vertical style={{ margin: '1em 0em 0em', padding: '1em 0em' }}>
      <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='https://p7.hiclipart.com/preview/104/286/484/computer-icons-home-house-martinez-building-house.jpg' style={{ marginRight: '1.5em' }} />
          Dynamic Designs
        </Menu.Item>
        <NavLink to="/home_page" >
          <Menu.Item as="a" >Home</Menu.Item>
        </NavLink>
        <NavLink to="/room_builder_page" >
          <Menu.Item as="a" > Rooms </Menu.Item>
        </NavLink>
        <NavLink to="/users_rooms" >
          <Menu.Item as="a" > Saved Rooms </Menu.Item>
        </NavLink>
        <NavLink to="/home_page" >
          <Menu.Item >
                  <Button as='a'floated="right">
                    Log in
                  </Button>

                </Menu.Item>
        </NavLink>
      </Container>
      </Menu>
      

      </Segment>

    </div>
  );
};

export default Nav;