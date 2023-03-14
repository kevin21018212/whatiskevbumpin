import React, { useState, useEffect } from "react";

import "../componentscss/Head.css";
import { average } from 'color.js'

const albumArt = require("album-art");

export const Getcurrenttrack = ({ userName, apiKey, imgorcover }) => {
  const [lfmData, updateLfmData] = useState({});

  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error");
      })
      .then((data) => updateLfmData(data))
      .catch(() =>
        updateLfmData({ error: "Whoops! Something went wrong with Last.fm" })
      );
  }, [apiKey, userName]);

  const buildLastFmData = () => {
    const track = lfmData?.recenttracks?.track;

    if (!track) {
      return <p>Loading</p>;
    }

    const [
      {
        name: songName,
        artist: { "#text": artistName },
        image: [{ "#text": image }] = {},
      } = {},
    ] = track;

    var imageslice = image.slice(42);
    var string = "https://lastfm.freetls.fastly.net/i/u/300x300/";
    string = string.concat(imageslice);

    if (imgorcover === "1") {
      return songName;
    } 

    else if (imgorcover === "2") {
      albumArt(artistName, async function (err, res) {
        document.getElementById("coverid").src = res;
    
       
        const color= await average(res, { format: 'hex' });
       
        document.documentElement.style.setProperty('--bg', color);
   
        const color2=await average(string, { format: 'hex' });
         
        document.documentElement.style.setProperty('--bg2', color2);
     
  
      });

   
      
      return <img id="coverid" src="" alt="cover"></img>;
    } 
    
    else if (imgorcover === "3") {
      return artistName;
    } 
    else if (imgorcover === "4") {
      
      return <img src={string}  alt="cover"></img>;
    } 
   
   
    else {


      return <p>Loading</p>;
    }
  };

  return buildLastFmData();
};


