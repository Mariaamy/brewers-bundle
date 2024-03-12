import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components/button'
import Loading from '../components/loading'
import { PrimaryLink } from '../components/button'

const Register = () => {
  return (
    <>
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap="1rem" marginBottom="2rem">
      <Loading></Loading>
      <h1 style={{margin: ".5rem"}}>Register</h1>
      <Typography textAlign="center" width="30ch" marginBottom="1rem">Log in or register to log and share your brewing creations.</Typography>
      <TextField variant="outlined" label="Username" />
      <TextField variant="outlined" label="E-mail" />
      <TextField variant="outlined" label="Password" type="password" />
      <TextField variant="outlined" label="Password" type="password" />

      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap="1rem">
        <PrimaryButton component={Link} to="/login" variant="contained" size="large">Log in</PrimaryButton>
        <Typography marginTop="1.5rem">Already registered? <Link style={PrimaryLink} to="/login">Login here</Link></Typography>
      </Box>
    </Box>
  </>
  )
}

export default Register