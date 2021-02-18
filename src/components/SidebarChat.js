import React, {useState,useEffect} from 'react'
import {Avatar , IconButton} from '@material-ui/core';
import {getMessages} from '../services/chatService'

export default function SidebarChat(props) {
    
    const [lastMessage,setLastMessage]=useState('')

    useEffect(async()=>{
        const allChats=await getMessages(props.contact.number);
        const lastChat=allChats.pop()
        if(lastChat!=undefined){
            setLastMessage(lastChat.message)
        } 
    },[props.contact.number])

    return (
            <div className="sidebarChat_list">
                <Avatar src={props.contact.profilePicture} />
                <div className="sidebarChat_contact">
                {<h3>{props.contact.name}</h3> } 
                {<small>{lastMessage}</small> } 
                </div>    
            </div> 
    )
}

