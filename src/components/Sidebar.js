import React, { useState } from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar , IconButton} from '@material-ui/core';

import SidebarChatList from './SidebarChatList';

export default function Sidebar() {


    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src="/images/dp1.jpg" alt="dp1"/>
                <div className="header-rightside-icons">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton> 
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>          
                </div>
            </div>           
            <SidebarChatList/>
        </div>
        
    )
}
