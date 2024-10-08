import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';


// toggle navbar, show to user if loggedin
const loggedin = true;

const Navbar = () => {
  const [value, setValue] = useState(0);

  const wrapperLoggedIn = {
    width: '100vw',
    backgroundColor: 'white',
    position: 'fixed',
    bottom: '0rem',
    display: loggedin === true ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const wrapperLoggedOut = {
    width: '100vw',
    backgroundColor: 'white',
    position: 'fixed',
    bottom: '0rem',
    display: loggedin === false ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
   }

  return (
    <>
      <Outlet/>
      <Box sx={wrapperLoggedIn}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction component={Link} to="/Feed" label="Recents" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link} to="/profile" label="Profile" icon={<PersonIcon />} />
          <BottomNavigationAction component={Link} to="/favorites" label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction component={Link} to="/" label="Logout" icon={<LogoutIcon />} />
        </BottomNavigation>
      </Box>
      <Box sx={wrapperLoggedOut}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
        </BottomNavigation>
      </Box>
    </>
  )
}

export default Navbar