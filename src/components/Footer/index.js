import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './footer.sass'

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='container'>
            
           <nav className='nav'>
                <div className='nav__container'>
                    <ul className='nav__list'>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link' to='/about'>About</NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/about/story'>Our Story</NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/about/mission'>Mission &amp; Values</NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/about/case-studies'>Case Studies</NavLink>
                        </li>
                    </ul>

                    <ul className='nav__list'>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link' to='/services'>Services</NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/services/assessments'>Assessments</NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/services/performance'>Performance Improvements</NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/services/interim'>Interim Management</NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link-sub' to='/services/restructuring'>Restructering &amp; Turnaround</NavLink>
                        </li>
                    </ul>

                    <ul className='nav__list'>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link' to='/consultants'>Consultants</NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink exact='true' activeclassname='nav__link--active' className='nav__link' to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>		
            </nav>

            <div className='company'>
                <h2 className='company__title'>Manufacturing Turnarounds</h2>
                <p className='company__tel'>(661) 332-0382</p>
                <p className='footer__disclaimer'>
                    By using this site, you acknowledge that you have read and agree to the Privacy Policy and Terms &amp; Conditions.
                    © 2021–{new Date().getFullYear()} Manufacturing Turnarounds All Rights Reserved. <Link to='/privacy' title="Privacy Policy"> <u>Privacy Policy</u></Link> | <Link to='/legal' title="Legal Page with Terms and Conditions"> <u>Terms &amp; Conditions</u></Link>

                </p>
            </div>
            
          </div>

        </footer>
    )
}

export default Footer