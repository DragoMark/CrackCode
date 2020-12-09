import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCirleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
// import React, { useState } from 'react'

const Post = ({ profilePic, imgName, username, timestamp, message }) => {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic}
                    className='post__avatar'
                />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{ message }</p>
            </div>

            <div className="post__image">
                <img src={imgName} alt=""/>
                {/* {
                imgName ? (
                    <div className="post__image">
                        <img src={`/api/retrieve/images/single?name=${imgName}`} />
                    </div>
                ) : (
                        console.log('DEBUG >>> no image here')
                    )
            } */}
            </div>
            


            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Upvote</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Answer</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCirleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
            
        
    )
}

export default Post
