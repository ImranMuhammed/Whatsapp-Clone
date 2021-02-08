import React, { useState } from 'react'

export default function ChatBody(props) {

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

