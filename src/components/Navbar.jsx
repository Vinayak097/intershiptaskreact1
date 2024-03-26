import { useEffect, useState } from 'react';
import './Navbar.css'



export function Navbar(){
    const [isSigned,setisSigned]=useState();
    
    
    function changes(){

        isSigned? setisSigned(false):setisSigned(true)
    }
    return <div className='nav'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Testmonials</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          
            <li><a href="#" onClick={()=>{changes()}} >{isSigned ? <>logout</>: <>Login</>}</a></li>
            
           
        
        </ul>
            
    </div>
}