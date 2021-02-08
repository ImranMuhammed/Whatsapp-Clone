import React, { useState } from 'react'
import ChatBody from './ChatBody'
import ChatHeader from './ChatHeader'
import messages from './messages'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {IconButton} from '@material-ui/core';

export default function Chat() {
    const[newText,setNewText]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(newText)
        setNewText('')
    }

    return (
        <div className="chat">
             <ChatHeader />
             <ChatBody messages={messages} />
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
