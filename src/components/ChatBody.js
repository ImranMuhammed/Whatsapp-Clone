import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'
import {getMessages} from '../services/chatService'

export default function ChatBody(props) {

    const [messages,setMessages]= useState([])
    
    const contactNumber=props.contactNumber;

    useEffect(async() => {
        const conversations=await getMessages(contactNumber);
        setMessages(conversations)
    },[contactNumber])

    useEffect(()=>{
        const pusher = new Pusher('432d39f38726b0f4c850', {
            cluster: 'ap2'
          });    
          const channel = pusher.subscribe('messages');
          channel.bind('inserted', (data)=> {
            setMessages([...messages,data])
          });
          return ()=>{
              channel.unbind_all();
              channel.unsubscribe();
          }
    },[messages])

    return (
            <div className="chat-body">
                {
                    
                  messages!==undefined ? messages.map((message,index)=>{
                        return(
                                <div key={index} className={`text ${message.received?'text-received':'text-sent'}`}>
                                    {message.message}
                                    <div className="text-time">{message.timeStamp}</div>
                                </div>
                        )
                    }):null
                }         
            </div>
            )
}

