import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';
import icon from '../assets/icon.png';


const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic={icon}
                message='you suck balls'
                timestamp='1634167646811'
                imgName='crackerton'
                username='Crakchead'
            />
            <Post 
                profilePic={icon}
                message='you suck'
                timestamp='163416'
                imgName={icon}
                username='Crackhead'
            />
        </div>
    )
}

export default Feed


// import React, { useEffect, useState } from 'react'
// import './Feed.css'
// import MessageSender from './MessageSender'
// import Post from './Post'
// import StoryReel from './StoryReel'
// import axios from '../axios'
// import Pusher from 'pusher-js'

// import db from '../firebase'

// const Feed = () => {
//     const [profilePic, setProfilePic] = useState('')
//     const [postsData, setPostsData] = useState([])

//     useEffect(() => {
//         db.collection('posts').onSnapshot(snapshot => (
//             setPostsData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
//         ))
//     }, [])

//     return (
//         <div className='feed' >
//             <StoryReel />
//             <MessageSender />

//             {
//                 postsData.map(entry => (
//                     <Post
//                         profilePic={entry.avatar}
//                         message={entry.text}
//                         timestamp={entry.timestamp}
//                         imgName={entry.imgName}
//                         username={entry.user}
//                     />
//                 ))
//             }
//         </div>
//     )
// }

// export default Feed