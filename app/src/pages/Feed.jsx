import React from 'react'
import Loading from '../components/loading';
import Post from '../components/Post';
import { usePostStore } from '../data/store';

const Feed = () => {

    const posts = usePostStore((state) => state.posts)

    const loading = false;

    const wrapper = {
        width: '100vw',
        height: '72vh',
    }

    const loadingWrapper = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50%'
    }

  return (
    loading === true ? (<div style={loadingWrapper}><Loading/></div>) : (
    <div style={wrapper}>
        { posts.map((post) =>
          <Post username={post.username} date={post.date} message={post.message}/>
        )}
    </div>
  ))}


export default Feed