import React from 'react'
import { useEffect } from 'react';
import Loading from '../components/loading';
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/material';

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
      marginBottom: '6rem',
      backgroundColor: 'yellow'
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
    top: '12rem'
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
        hello
       </Box>
    </div>
  )
  )
}

export default Profile