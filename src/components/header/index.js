import React, {useState} from 'react'
import "./header.css";
import Mobile from './mobile';
import Web from './web';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="header">
            <img src="./favicon.ico" style={{width : "50px"}}/>
            <div className="logo">Sushant Shinde</div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i class="fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Header
