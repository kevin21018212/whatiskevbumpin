


//axios for xml request

//xml file reader

import  { useState,useEffect} from 'react';



    
const albumArt = require('album-art')
 




  
      
      

    
 


    export const Gettoptracks = ({imgorcover, }) => {
        
        const [x, updateLfmData] = useState({});
        
        useEffect(() => {
            setTimeout(() => {
            fetch('http://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&user=Kevin21012&api_key=b6937c7c238176d6899dc83bf146337f&limit=3&period=1day&format=json')
           
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
        }, 1000);
  
        }, [imgorcover]);
        

     
        



 





        const buildLastFmData = () => {
         
          
        
         if(x?.toptracks?.track[0]&&imgorcover==='1'){
            const name0=x?.toptracks?.track[0]?.name;  
            const artist0=x?.toptracks?.track[0]?.artist?.name;
            //<Gettrackimage trackname={name} artist={artist}/>

            const options = {
                album: name0
            }
            albumArt(artist0, options, function (err, res) {
              document.getElementById("imgid0").src=res;
            })

          
            return <div className="middlestuff">
                
                 <div className='middlestuff-p'>{name0}</div>
                 <img  id="imgid0" src="" alt=""></img>
             
             </div>;
           }


       



        if(x?.toptracks?.track[1]&&imgorcover==='2'){




            const name1=x?.toptracks?.track[1]?.name;  
            const artist1=x?.toptracks?.track[1]?.artist?.name;

            //   <Gettrackimage trackname={name2} artist={artist2}/> 

            const options = {
                album: name1
            }
            albumArt(artist1, options, function (err, res) {
              document.getElementById("imgid1").src=res;
            })


            return <div div className="middlestuff"> 
                <div className='middlestuff-p'>{name1}</div> 
                <img  id="imgid1" src="" alt=""></img>
             </div>;
           }
          
         
           
               


           
           if(x?.toptracks?.track[2]&&imgorcover==='3'){
            const name2=x?.toptracks?.track[2]?.name;  
            const artist2=x?.toptracks?.track[2]?.artist?.name;

            //   <Gettrackimage trackname={name2} artist={artist2}/> 
            const options = {
                album: name2
            }
            albumArt(artist2, options, function (err, res) {
              document.getElementById("imgid2").src=res;
            })
            
            return <div div className="middlestuff"> 
            <div className='middlestuff-p'>{name2}</div> 
            <img  id="imgid2" src="" alt=""></img>
         </div>;
       
           }
          
          
    
        
        
          
          return <p>Loading...</p>;
           
        };
        
      return buildLastFmData();
      };
    
    
    
    
    
    
    
    