import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

// import '../style/PG.css'

function WeatherApp() {
  return (
    <div className="main-container">
        <div className="bg-light col-5 rounded-3 p-3">
            
                <input className="form-control" placeholder='City Name' type="text" />
            
                <div className="icon">
                    <FontAwesomeIcon icon={faCloud}  />
                    <b className='fs-1  text-center d-block'>23.4* C</b>
                </div>
            
        </div>
    </div>
  )
}

export default WeatherApp
