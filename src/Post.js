import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import InputOption from './InputOption'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function Post({name , descripition, messages, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
        <Avatar/>
        <div className='post__info'>
            <h2>Sushil verma</h2>
            <p>Descprition</p>
        </div>
        </div>
        <div className='post__body'>
            <p>Messages</p>
        </div>
        <div className='post__buttons'>
            <InputOption  Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>
            <InputOption  Icon={ChatOutlinedIcon} title='Comment' color='gray'/>
            <InputOption  Icon={ShareOutlinedIcon} title='Share' color='gray'/>
            <InputOption  Icon={SendOutlinedIcon} title='Send' color='gray'/>
        </div>
    </div>
  );
}

export default Post;