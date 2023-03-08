
import React, { useState,useEffect} from 'react';






export const Getcurrenttrack = ({ userName, apiKey, imgorcover, }) => {
    
    const [lfmData, updateLfmData] = useState({});
    
    useEffect(() => {
      fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('error');
        })
        .then(data => updateLfmData(data))
        .catch(() =>
          updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
        );
    }, [apiKey, userName]);
    
    const buildLastFmData = () => {
     
      const track = lfmData?.recenttracks?.track;
    
     
    
      if (!track) {
        return <p>Loading</p>;
      }
 
      const [
        { name: songName, image: [{ '#text': image } ]      = {} } = {}
      ] = track;

      

         var imageslice=image.slice(42)
         var string="https://lastfm.freetls.fastly.net/i/u/300x300/";
         string=string.concat(imageslice);


       if(imgorcover==='1'){
         return <p>{songName}</p>;
       }
       else{
      
      return <img src={string} alt='cover'></img>;
       }
    };
    
  return buildLastFmData();
  };







