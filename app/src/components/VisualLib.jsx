import React from 'react'
import { PrimaryButton, PrimaryLink, SecondaryButton, SecondaryLink } from './button'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import Loading from '../components/loading'

const styledBox = {
    display: "flex", 
    flexDirection: "column", 
    margin: "2rem",
    gap: "1rem"
}

const VisualLib = () => {
  return (
    <>
    <h1 style={{margin: "2rem"}}>Visual component library</h1>
    <Box sx={styledBox}>
        <h2>Button.jsx</h2>
        <PrimaryButton>PrimaryButton</PrimaryButton>
        <SecondaryButton>SecondaryButton</SecondaryButton>
        <Link style={PrimaryLink}>PrimaryLink</Link>
        <Link style={SecondaryLink}>SecondaryLink</Link>
    </Box>
    <Box sx={styledBox}>
        <h2>loading.jsx</h2>
        <Box>
        <Loading></Loading>
        </Box>
    </Box>
    </>
  )
}

export default VisualLib