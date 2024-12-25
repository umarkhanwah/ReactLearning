import React from 'react'
import { useState } from 'react'

const Header = () => {
    const [sideBarstatus , setsideBarstatus] = useState(false);
    const [modalStatus , setModalStatus] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className={`mysideBar ${sideBarstatus ?'activeSidebar' : '' }`}>

            <div className="topbar">
                <h1>Heading</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            <p >Ending of Sidebar</p>
        </div>

        <div className={modalStatus ? "modalOverlay" : ""}>
            <div className="myModal">
                    <button className={`btn btn-danger rounded-0 ${modalStatus ? "" : "d-none"}`} onClick={()=>setModalStatus(!modalStatus)}>&times;</button>
            </div>
        </div>

        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        
                        <button className="nav-link active" onClick={()=> setModalStatus(!modalStatus)}>
                            
                            Login
                        </button>

                    </li>
                    <li className="nav-item">
                        
                        <button className="nav-link active" onClick={()=> setsideBarstatus(!sideBarstatus)}>
                            
                            {sideBarstatus ?<span>&times;</span> : <span>&#9776;</span> }
                            </button>

                    </li>
                  
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header
