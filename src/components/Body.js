import "../componentscss/Body.css";

import { Gettoptracks } from "../services/gettoptracks";
import { Gettopalbum } from "../services/gettopalbum";


import pic from "../playlist.png"





function Body() {

  return (
    
    <div className="Body">
      <div className="Sidebar">
        <p>Sidebar</p>
      </div>

      <div className="Body-Main">
        <div className="Body-Main-Top">
          <div className="Body-Main-Top-Content">
      

       
            <div className="Body-Main-Top-Text box">
      Top Artist: <Gettopalbum imgorcover="1" />
         
            </div>
        
          
           
            <div className="Body-Main-Top-Playcount">
          <span className="text2"> Playcount: <Gettopalbum imgorcover="3" /></span>
              
            </div>
          
          </div>
          <div className="Body-Main-Top-Cover">
            <Gettopalbum imgorcover="2" />
          </div>
        </div>


        
        <div className="Body-Main-Middle">
          <div className="Body-Main-Middle-CoverRight">
            <Gettoptracks imgorcover="1" />
          </div>
          <div className="Body-Main-Middle-CoverMiddle">
            <Gettoptracks imgorcover="2" />
          </div>
          <div className="Body-Main-Middle-CoverLeft">
            <Gettoptracks imgorcover="3" />
          </div>
        </div>




        <div className="Body-Main-Bottom">
          <div className="Body-Main-Bottom-Cover">
            <img src={pic} alt=""/>
          </div>
          <div className="Body-Main-Bottom-Content">
          <div className="Body-Main-Bottom-Content"><a href="https://open.spotify.com/playlist/5pLSoW36SKxvWNivMPpSzz?si=158b467efa0f473f">Checkout my Playlists</a></div>
          </div>
        </div>
      </div>
   
    </div>
    
    
  );
}
/*
 
         
  */
export default Body;
