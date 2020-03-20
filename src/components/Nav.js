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
      <NavLink to="/main_room_page">Main Room Page</NavLink>
      <NavLink to="/room">Room</NavLink>
      <NavLink to="/room_index">Your Saved Rooms</NavLink>
    </div>
  );
};

export default Nav;