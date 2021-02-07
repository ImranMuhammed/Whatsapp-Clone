import React from 'react'
import {Avatar , IconButton} from '@material-ui/core';


export default function SidebarChatList() {
    return (
        <div className="sidebarChat_container">
            <div className="sidebarChat_list">
                <Avatar/>
                <div className="sidebarChat_contact">
                    <h3>Mohammed Imran</h3>
                    <small>Recent Chat</small>
                </div>    
            </div>
            <div className="sidebarChat_list">
                <Avatar/>
                <div className="sidebarChat_contact">
                    <h3>Mohammed Imran</h3>
                    <small>Recent Chat</small>
                </div>  
            </div>
            <div className="sidebarChat_list">
                <Avatar/>
                <div className="sidebarChat_contact">
                    <h3>Mohammed Imran</h3>
                    <small>Recent Chat</small>
                </div>  
            </div>
            <div className="sidebarChat_list">
                <Avatar/>
                <div className="sidebarChat_contact">
                    <h3>Mohammed Imran</h3>
                    <small>Recent Chat</small>
                </div>  
            </div>
            <div className="sidebarChat_list">
                <Avatar/>
                <div className="sidebarChat_contact">
                    <h3>Mohammed Imran</h3>
                    <small>Recent Chat</small>
                </div>  
            </div>
        </div>
    )
}
