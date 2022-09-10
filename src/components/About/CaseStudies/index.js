// import { Link } from 'react-router-dom'
import Header from '../../Header'
import Footer from '../../Footer'
import SidebarAbout from '../SidebarAbout'


const CaseStudies = () => {


    return (

        <main className='casestudies'>
            <Header />
            
            <section className='container container--flex'>
                <SidebarAbout />
                <main>
                    
                    <h1 className='title'>Case Studies </h1>
                    <p>content here</p>
                </main>
            </section>
            


            <Footer />
        </main>

    )
}

export default CaseStudies