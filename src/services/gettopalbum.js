//axios for xml request

//xml file reader

import { useState, useEffect } from "react";

const albumArt = require("album-art");

export const Gettopalbum = ({ userName, apiKey, imgorcover }) => {
  const [x, updateLfmData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=Kevin21012&api_key=b6937c7c238176d6899dc83bf146337f&format=json&limit=1"
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
    }, 1000);
  }, [imgorcover, apiKey, userName]);

  const buildLastFmData = () => {
    if (x.topartists) {
      if (imgorcover === "1") {
        const name = x.topartists.artist[0].name;

        return name;
      }

      if (imgorcover === "2") {
        const name = x.topartists.artist[0].name;
       
       
        albumArt(name, function (err, res) {
          document.getElementById("imgid").src = res;
        });
        return (
         
            <img id="imgid" src="" alt=""></img>
         
        );

      }

      if (imgorcover === "3") {
        const playcount = x.topartists.artist[0].playcount;

        return playcount;
      }
    }

    return ;
  };

  return buildLastFmData();
};
