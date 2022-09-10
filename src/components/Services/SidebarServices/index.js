import { NavLink } from 'react-router-dom'
import './sidebarservices.sass'

const SidebarServices = () => {


    return (

            
            <aside className='sidebar'>
                <nav className='sidebar__nav'>
                    <ul className='sidebar__nav-list'>
                        <li className='sidebar__nav-list-item '>
                            <NavLink exact='true' activeclassname='active' className='sidebar__link' to='/services'>services</NavLink>
                            <ul className='sidebar__dropdown'>
                                <li className='sidebar__dropdown-item'>
                                    <NavLink exact='true' activeclassname='active' className='sidebar__link-sub' to='/services/assessments'>Assessments</NavLink>
                                </li>
                                <li className='sidebar__dropdown-item'>
                                    <NavLink exact='true' activeclassname='active' className='sidebar__link-sub' to='/services/performance'>Performance Improvements</NavLink>
                                </li>
                                <li className='sidebar__dropdown-item'>
                                    <NavLink exact='true' activeclassname='active' className='sidebar__link-sub' to='/services/interim'>Interim Management</NavLink>
                                </li>
                                <li className='sidebar__dropdown-item'>
                                    <NavLink exact='true' activeclassname='active' className='sidebar__link-sub' to='/services/restructuring'>Restructuring &amp; Turnaround</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>

    )
}

export default SidebarServices