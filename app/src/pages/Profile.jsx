import React from 'react'
import { useEffect } from 'react';
import Loading from '../components/loading';
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/material';
import placeholder from '../assets/placeholder.jpeg';
import { FollowButton } from '../components/button';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Profile = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
      setLoading(false);
    }, 2000);
    }
  }, [loading]);

  const wrapper = {
      width: '100vw',
      height: '100vh',
      marginBottom: '7rem',
      backgroundColor: 'beige'
  }

  const loadingWrapper = {
      display: 'flex',
      justifyContent: 'center',
  }

  const container = {
    width: '100vw',
    height: '100%',
    backgroundColor: 'white',
    position: 'relative',
    top: '12rem',
    borderRadius: '3rem 3rem 0 0',
  }

  const media = {
    width: '60%',
    height: '8rem',
    borderRadius: '50%',
    border: 'white 2px solid',
    position: 'relative',
    left: '2rem',
    bottom: '2rem'
  }

  const containerIntroduction = {
    display: 'flex'
  }

  const introduction = {
    paddingTop: '1.5rem',
    marginLeft: '-1.5rem'
  }

  const introductionFollow = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '.5rem'
  }

  const introductionFollowers = {
    transform: 'scale(0.8)',
    marginLeft: '-1rem',
    marginTop: '-.5rem'
  }

  return (
    loading === true ? (
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <div style={loadingWrapper}><Loading/></div>
      </Backdrop>
    ) : (
    <div style={wrapper}>
       <Box style={container}>
          <Box style={containerIntroduction}>
            <Box>
              <img src={placeholder} style={media} alt='Placeholder'/>
            </Box>
            <Box style={introduction}>
              <Box>
              Name Nameson
              </Box>
              <Box style={introductionFollow}>
                <Box style={introductionFollowers}>
                  <AvatarGroup max={3}>
                    <Avatar>A</Avatar>
                    <Avatar>M</Avatar>
                    <Avatar>B</Avatar>
                    <Avatar>A</Avatar>
                    <Avatar>B</Avatar>
                    <Avatar>A</Avatar>
                  </AvatarGroup>
                </Box>
                <FollowButton>Follow</FollowButton>
              </Box>
            </Box>
          </Box>
       </Box>
    </div>
  )
  )
}

export default Profile