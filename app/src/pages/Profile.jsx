import React from 'react'
import { useEffect } from 'react';
import Loading from '../components/loading';
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/material';
import { FollowButton } from '../components/button';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Link } from 'react-router-dom';
import brewerIcon from '../assets/brewer-icon.svg';
import bottledIcon from '../assets/bottled-icon.svg';
import arrowIcon from '../assets/arrow-icon.svg';
import profileImage from '../assets/placeholders/profile.png';
import bottledOne from '../assets/placeholders/bottled-one.jpg';
import bottledTwo from '../assets/placeholders/bottled-two.png';
import bottledThree from '../assets/placeholders/bottled-three.jpg';
import fermentingOne from '../assets/placeholders/fermenting-one.jpg';
import fermentingTwo from '../assets/placeholders/fermenting-two.jpg';
import fermentingThree from '../assets/placeholders/fermenting-three.jpg';


const Profile = () => {
  const [loading, setLoading] = React.useState(true);

  const fermentingItems = [
    { text: 'Honey Haven Nectar', imageSrc: bottledOne, bottled: true, id: 'bottled' },
    { text: 'Elderberry Eclipse', imageSrc: bottledTwo, bottled: true, id: 'bottled' },
    { text: 'Mystic Melange', imageSrc: fermentingOne, bottled: false, id: 'unottled' },
    { text: 'Spiced Amber Elixir', imageSrc: fermentingTwo, bottled: false, id: 'unbottled' },
    { text: 'Moonlit Mead', imageSrc: fermentingThree, bottled: false, id: 'unbottled' },
    { text: 'Golden Grove Nectar', imageSrc: bottledThree, bottled: true, id: 'bottled' },
  ];

  const unbottledItems = fermentingItems.filter(item => !item.bottled);
  const bottledItems = fermentingItems.filter(item => item.bottled);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
      setLoading(false);
    }, 500);
    }
  }, [loading]);

  const wrapper = {
      width: '100vw',
      height: '100vh',
      marginBottom: '2rem',
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

  const imageProfile = {
    width: '100%',
    height: '8rem',
    borderRadius: '50%',
    border: 'white 2px solid',
    position: 'relative',
    left: '-1rem',
    bottom: '2rem',
    objectFit: 'cover',
  }

  const containerIntroduction = {
    display: 'flex',
    justifyContent: 'center'
  }

  const introduction = {
    paddingTop: '1.5rem',
    marginLeft: '0rem'
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

  const containerMain = {
    height: '60%',
  }

  const mainFermenting = {
    height: '50%',
    marginBottom: '.5rem'
  }


  const fermentingHeading = {
    display: 'flex',
    marginLeft: '1rem'
  }

  const fermentingList = {
    width: '70%',
    marginLeft: '1rem',
    overflowX: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
 
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
  
  const mainBottled = {
    height: '50%',
  }

  const linkItem = {
    textDecoration: 'none',
    color: 'black',
    "&hover": {
      color: 'grey'
    }
  }

  const iconCategory = {
    width: '3rem',
    height: '3rem',
    position: 'relative',
    bottom: '.9rem'
  }

  const iconArrow = {
    width: '1rem',
    height: '3.4rem',
    position: 'absolute',
    left: '20rem'
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
              <img src={profileImage} style={imageProfile} alt='Placeholder'/>
            </Box>
            <Box style={introduction}>
              <Box>
              Kayla Jimenez
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
          <Box style={containerMain}>
            <Box style={mainFermenting}>
              <Box style={fermentingHeading}>
              {/* TODO: find appropriate MUI heading and icons */}
              <img src={brewerIcon} style={iconCategory} alt='fermenting'/>
              <p>Fermenting</p>
              <Link to={"/profile/fermenting"}>
              <img src={arrowIcon} style={iconArrow} alt='arrow'/>
              </Link>
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
            <Box style={mainBottled}>
              <Box style={fermentingHeading}>
                {/* TODO: find appropriate MUI heading and icons */}
                <img src={bottledIcon} style={iconCategory} alt='Bottle'/>
                <p>Bottled</p>
                <Link to={"/profile/bottled"}>
                <img src={arrowIcon} style={iconArrow} alt='arrow'/>
                </Link>
              </Box>
              {/* TODO: map out from store} */}
              {/* TODO: Refactor CSS */}
              <Box style={fermentingList}>
                    {bottledItems.map((item, index) => (
                      <Link key={index} style={linkItem}>
                        <Box style={fermentingListItem}>
                          <img src={item.imageSrc} style={imageFermenting} alt={item.text} />
                          <p>{item.text}</p>
                        </Box>
                      </Link>
                    ))}
                  </Box>
            </Box>
          </Box>
       </Box>
    </div>
  )
  )
}

export default Profile