import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


import './Chat.css'

const Chat = () => {
    const [input, setInput]=useState("")
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);


    const sendMessage=(e)=>{
            e.preventDefault();
            console.log("Heii",input)
            setInput("")
    }


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
                <p className={`chat__message  ${true && 'chat__reciever'}`}>
                    <span className='chat__name'>
                        Elon Musk
                    </span>

                    Hello guys
                    <span className='time__stamp'>3:32pm</span>
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


                <form>
                    <input value={input} onChange={(e) =>setInput(e.target.value)} placeholder='Type here...'></input>
                    <button 
                    type='submit' onClick={sendMessage}  className='send__button'><IconButton><SendIcon/></IconButton> </button>
                </form>


                <IconButton>
                    <MicIcon />
                </IconButton>


            </div>


        </div>
    )
}

export default Chat