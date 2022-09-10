import Header from '../../Header'
import Footer from '../../Footer'
import SidebarServices from '../SidebarServices'


const Assessments = () => {


    return (

        <main className='assessments'>
            <Header />
            
            <section className='container container--flex'>
                <SidebarServices />
                <main>
                    <h1 className='title'>Assessments</h1>
                    <p>assessments text</p>
                </main>
            </section>
            


            <Footer />
        </main>

    )
}

export default Assessments