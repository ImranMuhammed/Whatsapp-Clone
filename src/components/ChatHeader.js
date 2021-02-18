import React from 'react'
import {Avatar,IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function ChatHeader(props) {

    return (
        <div className="chat-header-container">
             <div className="chat-contact-details">
                <div>
                    <Avatar src={props.contact.profilePicture} />
                </div>      
                <div className="chat-contact-recent">
                    <h3>{props.contact.name}</h3>
                    <p>{props.contact.lastSeen}</p>
                </div>
             </div>
                
            <div className="chat-header-icons">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton> 
                <IconButton>
                    <MoreVertIcon />
                </IconButton>  
            </div>

        </div>
    )
}
