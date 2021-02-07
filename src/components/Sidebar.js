import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar , IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
            <div className="sidebar_search_container">
                <div className="sidebar_searchBox">
                    <SearchIcon/>
                    <input type="text" placeholder="Enter the name of the contact" />
                </div>
            </div>
        </div>
        
    )
}
