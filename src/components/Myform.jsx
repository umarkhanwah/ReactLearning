import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const MyForm = ({action}) => {
  let [status , setStatus] = useState(false);
  
  
  return (
    <div className="container">
        {/* <label for="" class="form-label">S</label> */}
      
        <div class="input-group">
        
            
            <input
                type={status ? "text" : "password"}
                class="form-control border-end-0"
                onKeyUp={action}
                placeholder='Search Securely'
            />
          
          <button type="button" className="input-group-text bg-transparent   " onClick={()=>setStatus(!status)}><FontAwesomeIcon icon={status ? (faEyeSlash): (faEye)} ></FontAwesomeIcon></button>
            
            
      </div>
   
  </div>
  )
}

export default MyForm
