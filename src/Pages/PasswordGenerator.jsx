import React, { useEffect, useState } from 'react'
import '../style/PG.css'
import { Caps, Nums, Signs, Smalls } from '../data/letters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
function PasswordGenerator() {
    const [lenght, setlenght] = useState(10)

    const [capLetters, setcapLetters] = useState(false)
    const [smallLetters, setsmallLetters] = useState(false)
    
    const [numbers, setnumbers] = useState(false)    
    const [symbols, setsymbols] = useState(false)

    const [finalPassword, setfinalPassword] = useState('')

    let mergeString = ()=>{
        let password = '';

        if(capLetters) password += Caps;
        if(smallLetters) password+= Smalls;
        if(numbers) password += Nums;
        if(symbols) password += Signs;
        
        console.log(password);
        
        return password;
    }

    let randomizePassword = ()=>{
        let allStrings = mergeString();
        let password = '';
        for (let index = 0; index < lenght; index++) {
            
            password += allStrings.charAt(Math.floor(Math.random() *allStrings.length));
        }
        setfinalPassword(password);
    }


    
    
    

  return (
    <div className="main-container ">
        <a href="/" className="btn btn-lg backButton btn-danger "> <FontAwesomeIcon icon={faArrowLeft} /> </a>

        <h4 className="display-3 text-light">Password Generator </h4>
        <div className="p-4 text-light bg-dark h-50 rounded-5">
   
                <div className="input-group">

                <input type="text" value={finalPassword} readOnly  className='form-control'/>

                <button className='btn btn-light' >Copy</button>
                
                </div>
                <div className="input my-3 ">

                <label   className="form-label" >Password Length</label>
                <input type="number" min={10} max={20} onChange={(event)=>setlenght(event.target.value)} value={lenght} className="form-control form-control-number w-25"   />

                </div>

                <div class="input">
                    <label  for="capLetters"  className='form-label'>Allow Capital Letters</label>
                    <input
                        class="form-check-input "
                        type="checkbox"
                        value={capLetters}
                        id="capLetters"
                        
                        onChange={(e)=>setcapLetters(!capLetters)}
                        />
                </div>
                <div class="input">
                    <label  for="smallLetters"  className='form-label'>Allow Small Letters</label>
                    <input
                        class="form-check-input "
                        type="checkbox"
                        value={smallLetters}
                        id="smallLetters"
                        onChange={(e)=>setsmallLetters(!smallLetters)}
                        />
                </div>

                <div class="input ">
                    <label  for="number"className='form-label'>Allow Numbers </label>
                    <input class="form-check-input" type="checkbox"
                        value={numbers}
                        onChange={(e)=>setnumbers(!numbers)}
                        id="number" />
                </div>
                <div class="input">
                    <label  for="symbol"className='form-label'>Allow Symbols </label>
                    <input class="form-check-input" type="checkbox" 
                        value={symbols}
                        onChange={(e)=>setsymbols(!symbols)}
                    
                    id="symbol" />
                </div>
                
                    <button className="btn btn-outline-light w-100" type="button" onClick={randomizePassword}>Generate</button>
                
                
          
                
        </div>
    </div>
  )
}

export default PasswordGenerator
