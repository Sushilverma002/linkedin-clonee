import React from 'react'
import './Header.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import HeaderOptions from './HeaderOptions';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
            <img src="https://i.ibb.co/VS7vH4f/linkedin.png" alt=""/>
  
            <div className='header_search'>
              <SearchSharpIcon />
              <input type='text' placeholder='Search'/>
            </div>
        </div>

        <div className='header_right'>
          <HeaderOptions Icon ={HouseRoundedIcon}title="Home"/>
          <HeaderOptions Icon = {SupervisorAccountRoundedIcon}title="My Network"/>
          <HeaderOptions Icon = {BusinessCenterRoundedIcon}title="Jobs"/>
          <HeaderOptions Icon = {ChatRoundedIcon}title="Messaging"/>
          <HeaderOptions Icon = {NotificationsRoundedIcon}title="Notifications"/>
          <HeaderOptions avatar ="https://i.ibb.co/N9V88ry/imgphoto.jpg" title="Me"/>
        </div>


    </div>
  )
}

export default Header