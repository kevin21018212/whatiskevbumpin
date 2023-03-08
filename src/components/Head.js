import '../componentscss/Head.css';

import "../Spotify-Font/GothamBold.ttf"
import "../Spotify-Font/GothamMedium.ttf"


import { Getcurrenttrack } from '../services/getcurrenttrackinfo';

function Head() {
  
   

    return (
   
      
      
      <>
 




      
      <div className="layout">
      
          <div className="Header-Content">
            <h1 className='Header-Content-Top'>Right Now Kev is Bumpin</h1>
      
            <h3 id="songinfo"className='Header-Content-Bottom'>
           <Getcurrenttrack userName='Kevin21012' apiKey='b6937c7c238176d6899dc83bf146337f' imgorcover='1'/>
  
          </h3>

          </div>

          <div className="Header-Image"> 
             
            <div className='img'> <Getcurrenttrack userName='Kevin21012' apiKey='b6937c7c238176d6899dc83bf146337f' /></div>
            </div>

     
        
         
       


        </div>
        </> 
    );
    
  }
  
  export default Head;