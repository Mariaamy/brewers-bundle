import React from 'react'
import Loading from '../components/loading'
import { Box, TextField, Typography } from '@mui/material'
import { PrimaryButton, PrimaryLink } from '../components/button'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
      <>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap="1rem" marginBottom="2rem">
          <Loading></Loading>
          <h1 style={{margin: ".5rem"}}>Log in</h1>
          <Typography textAlign="center" width="30ch" marginBottom="1rem">Log in or register to log and share your brewing creations.</Typography>
          <TextField variant="outlined" label="Username" />
          <TextField variant="outlined" label="Password" type="password" />
  
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap="1rem">
            <PrimaryButton component={Link} to="/login" variant="contained" size="large">Log in</PrimaryButton>
            <Typography marginTop="1.5rem">Not registered yet? <Link style={PrimaryLink} to="/register">Register here</Link></Typography>
          </Box>
        </Box>
      </>
    )
}

export default Login