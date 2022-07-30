import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';

import './Sidebar.css'
import './SidebarChat.css'


const Sidebarchat = ({addNewChat}) => {
    
    const [seed,setSeed] = useState("");

    useEffect(() =>{
        setSeed(Math.floor(Math.random()*5000))
    },[]);

    const createChat = () =>{
        const roomName= prompt("Please enter name for chat")
        if(roomName){
            //do some clever stuff
        }
    }


  return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src='https://avatars.dicebear.com/api/human/${seed}.svg'/>

            <div className='sidebarChat__info'>
                <h3>New chat</h3>
                <p>Last message from person</p>
            </div>

        </div>
  ): (
    <div onClick={createChat} className='sidebarChat'>
        <h3>Add new Chat</h3>
    </div>
  )
}

export default Sidebarchat