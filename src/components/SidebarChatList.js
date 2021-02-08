import React, { useState } from 'react'
import contacts from './Contacts'
import SearchIcon from '@material-ui/icons/Search';
import SidebarContact from './SidebarContact'


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
                        return( <SidebarContact key={index} contact={contact} /> )
                    }) :
                    contacts.map((contact,index)=>
                        {
                            if(contact.name.toLowerCase().includes(searchedName.toLowerCase())){
                           return  <SidebarContact key={index} contact={contact}/>
                            }
                        } 
                    )
                }
            </div>
        </>
    )
}
