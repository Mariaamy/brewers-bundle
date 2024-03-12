import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { teal } from '@mui/material/colors'
import Loading from '../components/loading'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  width: "10rem",
  backgroundColor: teal[400],
  '&:hover': {
    backgroundColor: teal[700],
  },
}));

const Home = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap="1rem">
      <Loading></Loading>
      <h1 style={{margin: ".5rem"}}>Hey!</h1>
      <Typography textAlign="center" width="30ch" marginBottom="1rem">Log in or register to log and share your brewing creations.</Typography>
      
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap="1rem">
        <ColorButton variant="contained" size="large">Log in</ColorButton>
        <ColorButton variant="contained" size="large">Register</ColorButton>
      </Box>
      </Box>
    </>
  )
}

export default Home