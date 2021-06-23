/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

const Nav = () => {
    return(
        <nav>
            <div className="nav-col">
                <div className="nav-row">Why ACY<i><FiChevronDown size="16px"/></i></div>
            </div>
            <div className="nav-col">
                <div className="nav-row">Products<i><FiChevronDown size="16px"/></i></div>
            </div>
            <div className="nav-col">
                <div className="nav-row">Platforms<i><FiChevronDown size="16px"/></i></div>
            </div>
            <div className="nav-col">
                <div className="nav-row">Education<i><FiChevronDown size="16px"/></i></div>
            </div>
            <div className="nav-col">
                <div className="nav-row">Partners<i><FiChevronDown size="16px"/></i></div>
            </div>
        </nav>
    );
}

export default Nav;