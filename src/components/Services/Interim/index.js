import Header from '../../Header'
import Footer from '../../Footer'
import SidebarServices from '../SidebarServices'


const Interim = () => {


    return (

        <main className='interim'>
            <Header />
            
            <section className='container container--flex'>
                <SidebarServices />
                <main>
                    <h1 className='title'>Interim</h1>
                    <p>interim text</p>
                </main>
            </section>
            


            <Footer />
        </main>

    )
}

export default Interim