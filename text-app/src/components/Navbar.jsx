import React from 'react'
// import { Link } from 'react-router-dom'




export default function Navbar(props) {
   
    return (
        <>
        <div className={`navBar bg-${props.mode} text-${props.textDark} d-flex justify-between h-12 border border-dark`}>
            <div className="nav_list d-flex space-x-3 text-lg items-center mx-2">
                {/* <h1>TEXT APP</h1> */}
                <ul className='d-flex space-x-5 items-center mx-4'>
                    <li className='hover:underline hover:text-black font-semi-bold'><a href="/">Home</a></li>
                    <li className='hover:underline hover:text-black font-semi-bold'><a href="/">About</a></li>
                    <li className='hover:underline hover:text-black font-semi-bold'><a href="/">Text-App</a></li>
                </ul>
            </div>
            <div className="form-check form-switch d-flex justify-end items-center space-x-3 mx-2">
                <input onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label font-semibold" htmlFor="flexSwitchCheckDefault">{props.darkText}</label>
            </div>
        </div>
       
        </>
        
    )
}
