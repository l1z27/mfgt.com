import { NavLink } from 'react-router-dom'
import { useState } from "react"
import './header.sass'

const Header = () => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      };
    return(
        <header className='header'>
            <NavLink exact='true' activeclassname='nav__link--active' className='logo' to='/'>Manufacturing Turnarounds</NavLink>
            <nav className={isActive ? "nav" : "nav nav--active"}>
                <div className='nav__container'>
                    <button type='button' className={isActive ? "nav__mobile nav__mobile-toggle" : "nav__mobile nav__mobile-toggle nav__mobile--active"} onClick={handleToggle}>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='nav__mobile-icon'></span>
                        <span className='nav__mobile-icon'></span>
                        <span className='nav__mobile-icon'></span>
                    </button>
            
                    <ul className={isActive ? "nav__list" : "nav__list nav__list--active"}>
                        <li className='nav__list-item nav__list-item--dropdown'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link' to='/about'>about</NavLink>
                            <ul className='nav__dropdown'>
                                <li className='nav__dropdown-item'>
                                    <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/about/story'>Our Story</NavLink>
                                </li>
                                <li className='nav__dropdown-item'>
                                    <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/about/mission'>Mission &amp; Values</NavLink>
                                </li>
                                <li className='nav__dropdown-item'>
                                    <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/about/case-studies'>Case Studies</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className='nav__list-item nav__list-item--dropdown'>
                        <NavLink exact='true' activeclassname='nav__link--active' className='nav__link' to='/services'>Services</NavLink>
                            <ul className='nav__dropdown'>
                                <li className='nav__dropdown-item'>
                                    <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/services/assessments'>Assessments</NavLink>
                                </li>
                                <li className='nav__dropdown-item'>
                                    <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/services/performance'>Performance Improvements</NavLink>
                                </li>
                                <li className='nav__dropdown-item'>
                                    <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/services/interim'>Interim Management</NavLink>
                                </li>
                                <li className='nav__dropdown-item'>
                                    <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/services/restructuring'>Restructering &amp; Turnaround</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link' to='/consultants'>consultants</NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link' to='/contact'>contact</NavLink>
                        </li>
                    </ul>
                </div>		
            </nav>
          

        </header>
    )
}

export default Header