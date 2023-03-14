import "../componentscss/Head.css";

import "../Spotify-Font/GothamBold.ttf";
import "../Spotify-Font/GothamMedium.ttf";

import { Getcurrenttrack } from "../services/getcurrenttrackinfo";



function Head() {

 


  

  return (
   
    <>
      <div className="layout">
        <div className="Header-Content">
          <div className="Header-Content-Top">
            
           <div className="Header-Content-Top-Text">
       
      
             Right Now Kev is Bumpin
         
             </div>
          
          </div>
          <div className="Header-Content-Bottom">
      
            <div className="Header-Content-Bottom-Text" id="songinfo">
           
              <Getcurrenttrack
                userName="Kevin21012"
                apiKey="b6937c7c238176d6899dc83bf146337f"
                imgorcover="1"
              />
      
            </div>
        
          </div>
        </div>



        <div className="Header-Image">
          <div className="Header-Image-Stack">
            <div className="Header-Image-Stack-Cover">
              <Getcurrenttrack
                userName="Kevin21012"
                apiKey="b6937c7c238176d6899dc83bf146337f"
                imgorcover="4"
              />
            
            </div>
            <div className="Header-Image-Stack-Artist">
              <Getcurrenttrack
                userName="Kevin21012"
                apiKey="b6937c7c238176d6899dc83bf146337f"
                imgorcover="2"
              />
             

            </div>
            <div className="Header-Image-Stack-Streams">
          
              
            <span> <Getcurrenttrack 
                userName="Kevin21012"
                apiKey="b6937c7c238176d6899dc83bf146337f"
                imgorcover="3"
              />
              </span> 
         
            </div>
            <div className="Header-Image-Stack-Platform"></div>
          </div>
        </div>
      </div>
    
      
    </>
  );
  
}
// <Getcurrenttrack userName='Kevin21012' apiKey='b6937c7c238176d6899dc83bf146337f' />
export default Head;
