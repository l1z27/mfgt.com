import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import SidebarServices from './SidebarServices'


import './services.sass'

const Services = () => {


    return (

        <main className='services'>
            <Header />
            
            <section className='container container--flex'>
                <SidebarServices />
                <main>
                    <h2 className='title'>Services</h2>
                    <p>Services text here</p>
                    <Link to='/contact' className='btn'> Work With Us</Link>
                </main>
            </section>
            <Footer />
        </main>

    )
}

export default Services