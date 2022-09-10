import Header from '../../Header'
import Footer from '../../Footer'
import SidebarServices from '../SidebarServices'


const Performance = () => {


    return (

        <main className='performance'>
            <Header />
            
            <section className='container container--flex'>
                <SidebarServices />
                <main>
                    <h1 className='title'>Performance</h1>
                    <p>performance text</p>
                </main>
            </section>
            


            <Footer />
        </main>

    )
}

export default Performance