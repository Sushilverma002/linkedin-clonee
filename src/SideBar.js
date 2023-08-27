import React from 'react'
import './SideBar.css'
import { Avatar } from '@mui/material';

function SideBar() {
    const recentItem =(topic) =>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );




  return (
    <div className='sideBar'>
        <div className='sidebar__top'>
            <img src='https://plus.unsplash.com/premium_photo-1667796404562-6362e48ceb6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
            <Avatar className='sidebar__avatar'/>
            <h2>Sushil Verma</h2>
            <h4>sushilvarma9911@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you </p>
                <p className='sidebar_statNumber'>2,452</p>
            </div>
            <div  className='sidebar__stat'>
                <p>Views on post </p>
                <p className='sidebar_statNumber'>2,448</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('Projgramming')}
            {recentItem('GSSoC')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default SideBar