import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import SidebarAbout from './SidebarAbout'




import './about.sass'

const About = () => {


    return (

        <main className='about'>
            <Header />
            <section className='container container--flex'>
                <SidebarAbout />
                <main>
                <h2 className='title'>ABOUT</h2>
                <p>Text to be added to explain the about us landing page</p>
                <Link to='/contact' className='btn'> Work With Us</Link>
                </main>
            </section>
            <Footer />
        </main>

    )
}

export default About