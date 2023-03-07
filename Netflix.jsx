import React from 'react'
import './Netflix.css'
const Netflix=()=>{
    return(
        <nav className="net">
            <div className="logo">
            <img src="https://thumbs.dreamstime.com/b/netflix-logo-screen-kyiv-ukraine-march-american-content-platform-production-company-offering-online-streaming-225819398.jpg" alt="logo" />
            </div>
            <ul className="flix">
                    <li><a href="#">home</a>  </li>
                    <li><a href="#">about</a></li>
                    <li> <a href="#">services</a></li>
                    <li><a href="#">movies</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
                <button className="click">signup</button>
                <button className="btn">login</button>
            </nav>
 )
}
export default Netflix;