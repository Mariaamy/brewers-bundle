import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';


const loggedin = true;

const Navbar = () => {
  const [value, setValue] = useState(0);

  const wrapper = {
    width: '100vw',
    position: 'fixed',
    bottom: '0',
    display: loggedin === true ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <>
      <Outlet/>
      <Box sx={wrapper}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction component={Link} to="/Feed" label="Recents" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link} to="/Login" label="Profile" icon={<PersonIcon />} />
          <BottomNavigationAction component={Link} to="/Register" label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Box>
    </>
  )
}

export default Navbar