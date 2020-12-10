//Header__center change the icons

import React from 'react';
import './Header.css';
import logo from '../assets/logo1.png';
// import icon from '../assets/icon.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../StateProvider'

const Header = () => {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className = 'header'>
            <div className="header__left">
                <img src={logo} alt="Crack Logo"/>
            </div>

            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder='Search'/>
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon />
                </div>
                <div className="header__option header__option--active">
                    <FlagIcon />
                </div>
                <div className="header__option header__option--active">
                    <SubscriptionsOutlinedIcon />
                </div>
                <div className="header__option header__option--active">
                    <StorefrontOutlinedIcon />
                </div>
                <div className="header__option header__option--active">
                    <SupervisedUserCircleIcon />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />     
                </IconButton>

                <IconButton>
                    <ForumIcon />    
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />    
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />     
                </IconButton>

            </div>
        </div>

        
    )
}

export default Header;
