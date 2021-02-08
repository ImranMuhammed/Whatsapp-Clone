import React, { useState } from 'react'

import SidebarHeader from './SidebarHeader'

import SidebarChatList from './SidebarChatList';

export default function Sidebar() {


    return (
        <div className="sidebar">
            <SidebarHeader />        
            <SidebarChatList/>
        </div>
        
    )
}
