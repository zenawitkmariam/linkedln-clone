import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import './header.css'
import TargetIcon from './targetIcon';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Logo from '../logo/linkedenlogo.png'

function Header() {
  return (
    <div  className='header_top'>
        <div className='left_header' >
           <img src={Logo} alt='' />
           <div className='header_search'>
                <SearchIcon />
                <input className='search_input' placeholder='search' />
           </div>
        </div>
        <div className='right_header'>
               <TargetIcon name='Home' Icon={HomeIcon} />
               <TargetIcon name='My Network' Icon={SupervisorAccountIcon} />
               <TargetIcon name='Jobs' Icon={BusinessCenterIcon} />
               <TargetIcon name='Notification' Icon={CircleNotificationsIcon} />
               <TargetIcon name='Message' Icon={ChatIcon} />
               <TargetIcon name='Me' avatar="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Flinkedin_174857&psig=AOvVaw1OY6-VtnrvLTyonkqDl3SQ&ust=1671285916481000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNj0vqyn_vsCFQAAAAAdAAAAABAE" />
        </div> 
    </div>
  )
}

export default Header