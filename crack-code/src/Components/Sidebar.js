import React from 'react';
import './Sidebar.css';
import icon from '../assets/icon.png';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
// import { useStateValue } from '../StateProvider';


const Sidebar = () => {
    // const [{ user }, dispatch] = useStateValue()
    return (
        <div className='sidebar'>
            {/* {<SicebarRow src={user.photoURL} title={user.displayName} />} */}
            {/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
            <SidebarRow src={icon} title='Crackheads' />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Info Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Connections' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Buffer' />
            <SidebarRow Icon={VideoLibraryIcon} title='Buffer' />
            <SidebarRow Icon={ExpandMoreOutlined} title='More' />
        </div>
    )
}

export default Sidebar;
