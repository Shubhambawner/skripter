import React from 'react'
import Logo from './Logo.jsx'
// import styles from "./sidenav.module.css"
export default function Sidenav({ navigate }) {

    return (
        <div style={{ width: '100%' }} className="col-2 sticky-top text-bg-primary vh-100 ">
            <div className='d-flex justify-content-center p-3'>
                <Logo />
            </div>
            <ul className='list-unstyled '>
                <li onClick={() => { navigate('home') }} class={`list-item mt-3 p-3 pb-0 fs-5 `}>

                    Dashboard
                </li>

                <li onClick={() => { navigate('recordings') }} class="list-item mt-3 p-3 pb-0 fs-5">Recordings <hr /></li>

                <li class="list-item mt-3 p-3 pb-0 fs-5">Settings<hr /></li>

                <li onClick={() => { navigate('about') }} class="list-item mt-3 p-3 pb-0 fs-5">About Us</li>
                <hr />
            </ul>
        </div >
    )
}
