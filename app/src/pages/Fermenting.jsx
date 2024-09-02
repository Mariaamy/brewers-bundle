import React from 'react'
import { useEffect } from 'react';
import Loading from '../components/loading';
import Backdrop from '@mui/material/Backdrop';
import { Box, Typography } from '@mui/material';
import placeholder from '../assets/placeholder.jpeg';
import { Link } from 'react-router-dom';
import brewerIcon from '../assets/brewer-icon.svg';
import leftArrowIcon from '../assets/leftarrow-icon.svg';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Fermenting = () => {
  const [loading, setLoading] = React.useState(true);

  const fermentingItems = [
    { text: 'Example ferment', imageSrc: placeholder, bottled: true, id: 'bottled' },
    { text: 'Example ferment', imageSrc: placeholder, bottled: true, id: 'bottled' },
    { text: 'Example ferment', imageSrc: placeholder, bottled: false, id: 'unottled' },
    { text: 'Example ferment', imageSrc: placeholder, bottled: false, id: 'unbottled' },
    { text: 'Example ferment', imageSrc: placeholder, bottled: false, id: 'unbottled' },
    { text: 'Example ferment', imageSrc: placeholder, bottled: true, id: 'bottled' },
  ];

  const unbottledItems = fermentingItems.filter(item => !item.bottled);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
      setLoading(false);
    }, 2000);
    }
  }, [loading]);

  // TODO: Move CSS into its own file to keep code DRY

  const mainFermenting = {
    marginTop: '2rem',
    marginLeft: '1rem',
  }

  const loadingWrapper = {
    display: 'flex',
    justifyContent: 'center',
  }


  const fermentingHeading = {
    display: 'flex',
    width: '40%',
    marginLeft: '1rem',
    justifyContent: 'space-between'
  }

  const fermentingList = {
    marginTop: '2rem',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'left'
 
  }

  const fermentingListItem = {
    maxWidth: '10ch',
    textAlign: 'center'
  }

  const imageFermenting = {
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    objectFit: 'cover'
  }  

  const linkItem = {
    textDecoration: 'none',
    color: 'black',
    "&hover": {
      color: 'grey'
    }
  }

  const iconCategory = {
    width: '2.5rem',
    height: '3rem',
    position: 'relative',
    bottom: '1.8rem'
  }

  const iconArrow = {
    marginLeft: '1rem',
    marginBottom: '3rem'
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
    <Box style={mainFermenting}>
      <Link to={"/profile"}>
        <img src={leftArrowIcon} style={iconArrow} alt='back arrow' />
      </Link>
      <Box style={fermentingHeading}>
      {/* TODO: find appropriate MUI heading and icons */}
      <img src={brewerIcon} style={iconCategory} alt='fermenting'/>
      <Typography>Fermenting</Typography>

      </Box>
      {/* TODO: map out from store} */}
      <Box style={fermentingList}>
        {unbottledItems.map((item, index) => (
          <Link key={index} style={linkItem}>
            <Box style={fermentingListItem}>
              <img src={item.imageSrc} style={imageFermenting} alt={item.text} />
              <p>{item.text}</p>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
    )
  )
}

export default Fermenting