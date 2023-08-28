import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user=useSelector(selectUser);
    const[input,setInput] = useState('');
    // posts,setspost
    const [posts,setPosts] = useState([]);

    //function --> for firebase connection
    // here order by is for ordering the post on the basis of timestamp
    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>
        setPosts(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        )
    );
    },[])

    // we are preventing default on re fresh the page
    const sendPost= (e) =>{
        e.preventDefault();

        db.collection('posts').add({
            name:user.displayName, 
            descripition:user.email,
            messages:input,
            photoUrl:user.photoUrl || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        sendPost("");
    };
  return (
    <div className='feed'>
        <div className='feed__inputConatiner'>
            <div className='feed__input'>
                <CreateIcon/>
                <form>
                    <input value={input} onChange={e =>setInput(e.target.value)} type='text'/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title='Photo' color='#378FE9'/>
                <InputOption Icon={WorkRoundedIcon} title='Jobs'color='#A872E8'/>
                <InputOption Icon={CalendarViewDayIcon} title='Write Article'color='#E16745'/>
            </div>
        </div>
        {/* post-feed */}
        <FlipMove>
        {posts.map(({id, data: {name,descripition,messages,photoUrl}})=>(
            <Post
            key={id}
            name={name}
            descripition={descripition}
            messages={messages}
            photoUrl={photoUrl}
            />
        ))}
        </FlipMove>
    </div>
  );
}

export default Feed;