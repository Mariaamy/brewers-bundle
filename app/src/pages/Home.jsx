import React from 'react'
import { Box, Typography } from '@mui/material'
import Loading from '../components/loading'
import { PrimaryButton } from '../components/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap=".5rem">
      <Loading></Loading>
      <h1 style={{margin: ".5rem"}}>Hey!</h1>
      <Typography textAlign="center" width="30ch" marginBottom=".5rem">Log in or register to log and share your brewing creations.</Typography>
      
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <PrimaryButton component={Link} to="/login" variant="contained" size="large">Log in</PrimaryButton>
        <PrimaryButton component={Link} to="/register" variant="contained" size="large">Register</PrimaryButton>
      </Box>
      </Box>
    </>
  )
}

export default Home