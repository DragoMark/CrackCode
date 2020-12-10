import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import axios from '../axios'
import Pusher from 'pusher-js'

const pusher = new Pusher('6216f3caed65d6ca8dea', {
    cluster: 'ap2'
});

function Feed (){
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    const syncFeed = () => {
        axios.get('/retrieve/posts')
        .then((res) => {
            console.log(res.data)
            setPostsData(res.data)
        })
    }

    useEffect(() => {
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
            syncFeed();
        });
    },[])


    useEffect(() => {
        syncFeed()
    },[])

    return (
        <div className='feed' >
            <MessageSender />

            {   
                postsData.map((entry) => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))    
            }
        </div>
    )
}

export default Feed