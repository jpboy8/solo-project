import React from "react";
import "./AlbumImage.css";

export default function AlbumImage({ url }) {

    console.log(url);
    return (
        <div className="albumImage flex">
            <img src={url} alt="album art" className="albumImage-art" />
            <div className="albumImage-shadow">
                <img src={url} alt="album art" className="albumImage-shadow" />
            </div>
        </div>

    )
} 