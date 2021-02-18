import React, { useState, useEffect } from 'react'
import ChatBody from './ChatBody'
import ChatHeader from './ChatHeader'
import messages from './messages'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {IconButton} from '@material-ui/core';
import {sendMessage} from '../services/chatService'
import {getContactDetails} from '../services/contactsService'

export default function Chat(props) {
    const[newText,setNewText]=useState('')
    const[contact,setContact]=useState('');
    const contactId=props.match.params.id;
   
  useEffect(async()=>{
      const contactDetails=await getContactDetails(contactId)
      setContact(contactDetails)
  },[contactId])

    const submitHandler=async (e)=>{
        e.preventDefault();
        await sendMessage(contact.name,contact.number,newText)
        setNewText('')
    }   

    return (
        contact!=undefined &&
        <div className="chat">
             <ChatHeader contact={{name:contact.name,profilePicture:contact.profilePicture,lastSeen:contact.lastSeen}} />
             <ChatBody contactNumber={contact.number} />
             <div className="chat-footer">

                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form onSubmit={submitHandler}>
                    <input 
                        type="text" 
                        placeholder="Type a message" 
                        value={newText} 
                        onChange={(e)=>{setNewText(e.target.value)}}                                            
                    />
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
                
             </div>
        </div>
        
    )
}
