import React, { useState, useEffect } from 'react';
import './Sidebar.css'
import SidebarButton from './SidebarButton.js'
import { FaPlay } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import { FaSignOutAlt } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import apiClient from '../../spotify';

export default function Sidebar() {
    const [image, setImage] = useState(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Axl_Rose_at_Yarkon_Park_in_Tel_Aviv%2C_Israel_--_May_1993.jpg/241px-Axl_Rose_at_Yarkon_Park_in_Tel_Aviv%2C_Israel_--_May_1993.jpg"
    );
    useEffect(() => {
        apiClient.get("me").then((response) => {
            setImage(response.data.images[0].url);
        })
    }, [])
    return (
        <div className="sidebar-container">
            <img src={image} className="profile-img" alt="profile"></img>
            <div>
                <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
                <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
                <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />

            </div>
            <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
        </div>
    )
}