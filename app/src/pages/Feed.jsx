import React from 'react'
import Loading from '../components/loading';
import Post from '../components/Post';

const Feed = () => {

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
    <div style={wrapper}>
        { loading === true ? (<div style={loadingWrapper}><Loading/></div>) : (
            <Post username="User230" date="18 march 2024" message="Can someone help me with this recipe???"/>
        )}
    </div>
  )
}

export default Feed