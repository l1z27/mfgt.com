
import Header from '../Header'
import Footer from '../Footer'
import consultantsData from '../../data/consultants.json';

import './consultants.sass'

const Consultants = () => {

    const renderConsultants = (consultants) => {
        return (
            <div className="consultant">
                {
                    consultants.map((consultants, idx) => {
                        return (
                            <div className="consultant__person" key={idx}>
                                <img 
                                src={consultants.img}
                                className="consultant__img"
                                alt="consultants" />
                                <div className="consultant__content">
                                    <p className="consultant__name">{consultants.name}</p>
                                    <p className="consultant__title">{consultants.title}</p>
                                    <p className="consultant__company">{consultants.company}</p>

                                    {/* <h4 className="consultant__description">{consultants.description}</h4> */}
                                    <button
                                        className="consultant__btn"
                                        onClick={() => window.open(consultants.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (

        <div className='consultants'>
            <Header />
                <main className='container'>
                    <h2 className='title'>Consultants</h2>
                    <p>Our team consists of professionals with deep experience in a vast array of industries who create effective strategic, operational, and financial solutions. We bring vision, wisdom, and years of experience to address critical issues in high-pressure situations. Our teams work closely and collaboratively with our clients to address their short-term needs while helping prepare them for long-term prosperity.</p>
                    <div>{renderConsultants(consultantsData.consultants)}</div>
                </main>
            <Footer />
        </div>

    )
}

export default Consultants