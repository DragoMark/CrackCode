import React, { useState } from 'react'
import icon from '../assets/icon.png'
import { Avatar } from '@material-ui/core'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useStateValue } from '../StateProvider';

const MessageSender = () => {
    const [input, setInput ] = useState('');
    const [imageUrl, setImageUrl ] = useState('');
    const [{ user }, dispatch] = useStateValue()

    // const handleChange = (e) => {
    //     if (e.target.files[0] ){
    //         setImage(e.target.files[0]);
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                        type="text" 
                        className='messageSender__input' placeholder={`What is your query, ${user.displayName}?`}
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}/>

                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder='image URL(optional)'
                    />
                    {/* <input 
                        type='file' className='messageSender__fileSelector' onChange={handleChange}     
                    /> */}
                    <button 
                    onClick={handleSubmit} 
                    type='submit'>Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color:'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color:'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color:'orange' }} />
                    <h3>Emotes</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender



// import { Avatar, Input } from '@material-ui/core'
// import { useStateValue } from '../StateProvider'
// import firebase from 'firebase'
// import db from '../firebase'
// import axios from '../axios'
// import FormData from 'form-data'

// const MessageSender = () => {
//     const [input, setInput] = useState('')
//     const [imageUrl, setImageUrl] = useState('')
//     const [image, setImage] = useState(null)
//     const [{ user }, dispatch] = useStateValue()

//     console.log(user)

//     const handleChange = (e) => {
//         if (e.target.files[0]) {
//             setImage(e.target.files[0])
//         }
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         db.collection('posts').add({
//             message: input,
//             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//             profilePic: user.photoURL,
//             username: user.displayName,
//             image: imageUrl
//         })

//         setImageUrl('')
//         setInput('')
//         setImage(null)
//     }

//     return (
//         <div className='messageSender' >
//             <div className="messageSender__top">
//                 <Avatar src={user.photoURL} />
//                 <form >
//                     <input type="text" className='messageSender__input' placeholder="What's on your mind?" value={input} onChange={(e) => setInput(e.target.value)} />
//                     <Input type="file" className='messageSender__fileSelector' onChange={handleChange} />
//                     <button onClick={handleSubmit} type='submit' >Hidden Submit</button>
//                 </form>
//             </div>
//             <div className="messageSender__bottom">
//                 <div className="messageSender__option">
//                     <VideocamIcon style={{ color: 'red' }} />
//                     <h3>Live Video</h3>
//                 </div>
//                 <div className="messageSender__option">
//                     <PhotoLibraryIcon style={{ color: 'green' }} />
//                     <h3>Photo/Video</h3>
//                 </div>
//                 <div className="messageSender__option">
//                     <InsertEmoticonIcon style={{ color: 'orange' }} />
//                     <h3>Feeling/Activity</h3>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MessageSender