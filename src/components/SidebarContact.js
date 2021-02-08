import React from 'react'
import {Avatar , IconButton} from '@material-ui/core';

export default function SidebarContact(props) {
    return (

            <div className="sidebarChat_list" >
                <Avatar/>
                <div className="sidebarChat_contact">
                   {<h3>{props.contact.name}</h3> } 
                   {<small>{props.contact.lastMessage}</small> } 
                </div>    
            </div>

    )
}
