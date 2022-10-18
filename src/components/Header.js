import React from 'react';

function Header() {
    return (
        <div className='WeatherType--links'>
            <header>
                <a href='/?city=San%20Francisco'>San Francisco</a>
                <a href='/?city=New%20York%20City'>New York City</a>
                <a href='/?city=Berlin'>Berlin</a>
                <a href='/?city=Seoul'>Seoul</a>
            </header>
        </div>

    )
}

export default Header;