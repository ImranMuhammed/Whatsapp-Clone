import React, { useState } from 'react'
import contacts from './Contacts'
import SearchIcon from '@material-ui/icons/Search';
import SidebarContact from './SidebarContact'
import {Avatar , IconButton} from '@material-ui/core';


export default function SidebarChatList(props) {
    const[searchedName,setSearchedName]=useState('')

    return (<>
            <div className="sidebar_search_container">
                <div className="sidebar_searchBox">
                    <SearchIcon/>
                    <input 
                        type="text" 
                        placeholder="Enter the name of the contact"
                        value={searchedName} 
                        onChange={(e)=>{setSearchedName(e.target.value)}} />
                </div>
            </div>

            <div className="sidebarChat_container">
                {
                    searchedName==''?
                    contacts.map((contact,index)=>{
                        return( 
                                <div className="sidebarChat_list" >
                                    <Avatar/>
                                    <div className="sidebarChat_contact">
                                    {<h3>{contact.name}</h3> } 
                                    {<small>{contact.lastMessage}</small> } 
                                    </div>    
                                </div> 
                            )
                    }) :
                    contacts.map((contact,index)=>
                        {
                            if(contact.name.toLowerCase().includes(searchedName.toLowerCase())){
                           return (
                                    <div className="sidebarChat_list" >
                                        <Avatar/>
                                        <div className="sidebarChat_contact">
                                        {<h3>{contact.name}</h3> } 
                                        {<small>{contact.lastMessage}</small> } 
                                        </div>    
                                    </div> 
                                )
                            }
                        } 
                    )
                }
            </div>
        </>
    )
}
