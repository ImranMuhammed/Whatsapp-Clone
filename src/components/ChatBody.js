import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'

export default function ChatBody(props) {

    useEffect(()=>{
        const pusher = new Pusher('432d39f38726b0f4c850', {
            cluster: 'ap2'
          });
      
          const channel = pusher.subscribe('messages');
          channel.bind('inserted', (data)=> {
            alert(JSON.stringify(data));
          });
    })

    return (
            <div className="chat-body">
                {
                    props.messages.map((message,index)=>{
                        return(
                                <div key={index} className={`text ${message.received?'text-received':'text-sent'}`}>
                                    {message.text}
                                    <div className="text-time">{message.time}</div>
                                </div>
                        )
                    })
                }         
            </div>
            )
}

