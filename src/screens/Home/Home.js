import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Home.css'
import {setClientToken} from '../../spotify'
import Login from '../Auth/login.js'
import Library from '../Library/Library'
import Player from '../Player/Player'
import Favorites from '../Favorites/Favorites'
import Sidebar from '../../components/Sidebar/Sidebar.js'

export default function Home() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash ="";
        if (!token && hash) {
            const _token = hash.split('&')[0].split('=')[1];
            window.localStorage.setItem("token", _token);
            setToken(_token); 
            setClientToken(_token);
        }else{
            setToken(token);
            setClientToken(token);
        }

    }, [])

    return !token ? (
        <Login />) : (
        <Router>
            <div className="main-body">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Library />} />
                    <Route path="/player" element={<Player />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
        </Router>
    )
}