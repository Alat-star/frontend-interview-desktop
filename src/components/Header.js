import React from 'react';
import logo from './images/ALAT.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <div className='header-div' >
            <div className='logo-div'>
                <img src={logo} alt='logo'></img>
            </div>
            <div>
                <div>
                    <div>
                       <div><FontAwesomeIcon icon={["far", "comment"]} /></div>
                       <span>Comment (20)</span>
                    </div>
                    
                </div>
                <div>
                    <div>
                       <div><FontAwesomeIcon icon={["fas", "search"]} /></div>
                       <span>Search</span>
                    </div>
                </div>
                <div>
                    <div>
                       <div><FontAwesomeIcon icon={["fas", "code"]} /></div>
                       <span>Inspect</span>
                    </div>
                </div>
                <div>
                    <div>
                       <div><FontAwesomeIcon icon={["fas", "desktop"]} /></div>
                       <span>Screen (3)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Header)
