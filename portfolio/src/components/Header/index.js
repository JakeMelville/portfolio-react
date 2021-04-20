import React from 'react';
import './assets/style/style.css'

function Header() {
    return (
        <div id="header" className='container-fluid'>
            <div className='row'>
                <div className='col-10'></div>
                <div className='col-1 pl-5'><a href='/'>Home</a></div>
                <div className='col-1'>< a href='/apps'>Applications</a></div>
            </div>
        </div>
    )
}

export default Header; 