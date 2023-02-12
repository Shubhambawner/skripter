import React from 'react'
import Logo from './Logo.jsx'

export default function Sidenav() {
    return (
        <div className="col-2 sticky-top text-bg-primary vh-100 ">
            <div className='d-flex justify-content-center p-3'>
                <Logo />
                </div>
            <ul className='list-unstyled '>
                <hr />
                <li class="list-item mt-3 p-3 pb-0 fs-5">

                    Dashboard
                    <hr />
                </li>

                <li class="list-item mt-3 p-3 pb-0 fs-5">Recordings <hr /></li>

                <li class="list-item mt-3 p-3 pb-0 fs-5">Settings<hr /></li>

                <li class="list-item mt-3 p-3 pb-0 fs-5">About Us</li>
                <hr />
            </ul>
        </div >
    )
}
