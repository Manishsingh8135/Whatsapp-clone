import React from 'react'

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AssistantIcon from '@mui/icons-material/Assistant';
import SearchIcon from '@mui/icons-material/Search';
import Sidebarchat from './Sidebarchat';


import './Sidebar.css'
import { Icon, IconButton } from '@material-ui/core';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <IconButton>
          <PermIdentityIcon />
        </IconButton>


        <div className='sidebar__headerRight'>
          <IconButton>
            <AssistantIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>


      </div>

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchIcon />
          <input placeholder='Search or start new chat' type="text" />
        </div>
      </div>

      <div className='sidebar__chats'>
        <Sidebarchat addNewChat/>
        <Sidebarchat />
        <Sidebarchat/>

      </div>

      <div className='sidebar__search'>


      </div>



    </div>
  )
}

export default Sidebar