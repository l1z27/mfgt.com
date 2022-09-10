import Header from '../../Header'
import Footer from '../../Footer'
import SidebarServices from '../SidebarServices'


const Restructuring = () => {


    return (

        <main className='restructuring'>
            <Header />
            
            <section className='container container--flex'>
                <SidebarServices />
                <main>
                    <h1 className='title'>restructuring</h1>
                    <p>restructuring text</p>
                </main>
            </section>
            


            <Footer />
        </main>

    )
}

export default Restructuring