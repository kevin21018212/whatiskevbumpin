import '../componentscss/Body.css';

import { Gettoptracks } from '../services/gettoptracks';

function Body() {
    return (
      
    <div className="Body">
     
     
     
     
     <div className='Sidebar'><p>Sidebar</p></div>
      
      <div className="Body-Main">
      <div className="Body-Main-Top">
            <div className="Body-Main-Top-Content"><p>Test</p></div>
            <div className="Body-Main-Top-Cover"><p>Test</p></div>
   
    </div>
         <div className="Body-Main-Middle">
            <div className="Body-Main-Middle-CoverRight">
            <Gettoptracks className="Body-Main-Middle-Text" imgorcover='1' />
            
            
            </div>
            <div className="Body-Main-Middle-CoverMiddle">
              <Gettoptracks imgorcover='2' />
            </div>
            <div className="Body-Main-Middle-CoverLeft">
            <Gettoptracks imgorcover='3' />
            </div>
         </div>
         <div className="Body-Main-Bottom">
         <div className="Body-Main-Bottom-Content"><p>Test</p></div>
          <div className="Body-Main-Bottom-Cover"><p>Test</p></div>
         </div>
      </div>

      </div>
      
      
    );
  }
  /*
 
         
  */
  export default Body;