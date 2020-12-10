import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
// import axios from '../axios'
// import Pusher from 'pusher-js'

import db from '../firebase'

function Feed (){
    // const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    useEffect(() => {
        db.collection("posts")
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot) => 
            setPostsData(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        )
    }, [])

    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            {postsData.map((entry) => (
                <Post
                    profilePic={entry.data.profilePic}
                    message={entry.data.message}
                    timestamp={entry.data.timestamp}
                    imgName={entry.data.imgName}
                    username={entry.data.username}
                />
                ))
            }
        </div>
    )
}

export default Feed