import React from "react";
import "./SongCard.css";
import AlbumInfo from "./AlbumInfo.js";
import AlbumImage from "./AlbumImage.js";

export default function SongCard({album}){
    return(
        <div className="songCard-body flex">
            <AlbumImage url={album?.images[0]?.url}/>
            <AlbumInfo album={album}/>
        </div>
    )
}