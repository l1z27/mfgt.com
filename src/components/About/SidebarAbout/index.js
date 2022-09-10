import { NavLink } from 'react-router-dom'
import './sidebarabout.sass'

const SidebarAbout = () => {


    return (

            
            <aside className='sidebar'>
                <nav className='sidebar__nav'>
                    <ul className='sidebar__nav-list'>
                        <li className='sidebar__nav-list-item '>
                            <NavLink exact='true' activeclassname='active' className='sidebar__link' to='/about'>about</NavLink>
                            <ul className='sidebar__dropdown'>
                                <li className='sidebar__dropdown-item'>
                                    <NavLink exact='true' activeclassname='active' className='sidebar__link-sub' to='/about/story'>Our Story</NavLink>
                                </li>
                                <li className='sidebar__dropdown-item'>
                                    <NavLink exact='true' activeclassname='active' className='sidebar__link-sub' to='/about/mission'>Mission &amp; Values</NavLink>
                                </li>
                                <li className='sidebar__dropdown-item'>
                                    <NavLink exact='true' activeclassname='active' className='sidebar__link-sub' to='/about/case-studies'>Case Studies</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>

    )
}

export default SidebarAbout