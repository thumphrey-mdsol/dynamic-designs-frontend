import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'



const Nav = () => {
  return (
    <div className="navbar">
        {/* <AppBar position='static' >
            <Toolbar >
                <Typography variant='title' color='inherit'>
                    Testing Material UI
                </Typography>
            </Toolbar>
        </AppBar> */}
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink to="/home_page">Home Page</NavLink>
      <NavLink to="/room">Room</NavLink>
      <NavLink to="/users_rooms">Your Rooms</NavLink>
    </div>
  );
};

export default Nav;