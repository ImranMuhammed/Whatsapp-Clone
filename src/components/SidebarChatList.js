import React, { useContext, useState,useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar , IconButton} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {getAllContacts} from '../services/contactsService'
import { cleanup } from '@testing-library/react';

export default function SidebarChatList(props) {
    const[searchedName,setSearchedName]=useState('')
    const[contacts,setContacts]=useState([]);

    useEffect(async() => {
        const contactsList= await getAllContacts();
        setContacts(contactsList)
    }, [])

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
                  contacts!=undefined &&  contacts.map((contact,index)=>{
                        return( 
                            <Link key={index}   to={`/${contact._id}`} >
                                <div className="sidebarChat_list">
                                    <Avatar src={contact.profilePicture} />
                                    <div className="sidebarChat_contact">
                                    {<h3>{contact.name}</h3> } 
                                    {<small>{contact.lastMessage}</small> } 
                                    </div>    
                                </div> 
                            </Link>
                                
                            )
                    }) :
                  contacts!=undefined &&  contacts.map((contact,index)=>
                        {
                            if(contact.name.toLowerCase().includes(searchedName.toLowerCase())){
                           return (
                               <Link key={index}  to={`/${contact._id}`} >
                                    <div className="sidebarChat_list" >
                                        <Avatar src={contact.profilePicture} />
                                        <div className="sidebarChat_contact">
                                        {<h3>{contact.name}</h3> } 
                                        {<small>{contact.lastMessage}</small> } 
                                        </div>    
                                    </div> 
                               </Link>
                                    
                                )
                            }
                        } 
                    )
                }
            </div>
        </>
    )
}
