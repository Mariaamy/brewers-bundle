import React from 'react'
import { useEffect } from 'react';
import Loading from '../components/loading';
import Post from '../components/Post';
import { usePostStore } from '../data/store';
import Backdrop from '@mui/material/Backdrop';

const Feed = () => {

    const posts = usePostStore((state) => state.posts)

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
        height: '100%',
        marginBottom: '6rem'
    }

    const loadingWrapper = {
        display: 'flex',
        justifyContent: 'center',
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
        { posts.map((post) =>
          <Post username={post.username} date={post.date} message={post.message}/>
        )}
    </div>
  ))}


export default Feed