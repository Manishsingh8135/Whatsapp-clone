import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


import './Chat.css'

const Chat = () => {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);


    return (
        <div className='chat'>

            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className='chat__headerInfo'>
                    <h3>User Name </h3>
                    <p>Last seen ...</p>

                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>

                </div>



            </div>

            <div className='chat__body'>
                <p className='chat__message'>
                    Hello guys
                </p>
                <p className='chat__message'>
                    Hello guys
                </p>

            </div>

            <div className='chat__footer'>
                <div className='chat__footerLeft'>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <EmojiEmotionsIcon />
                    </IconButton>
                </div>

                <div className='chat__footerSearch'>
                    <input placeholder='Type here...'></input>
                </div>


            </div>


        </div>
    )
}

export default Chat