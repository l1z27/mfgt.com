import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'



import './home.sass'

const Home = () => {
    const myRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current);
    }, [])

   
    return (

        <main className='home'>

            <div className={myElementIsVisible ? 'slideshow' : 'slideshow slideshow--follow'} ref={myRef}>
            <div className={myElementIsVisible ? 'header--nofollow' : 'header--follow'}>
                <Header />
            </div>
           
                <section className='fold'>
                    <h1 className='fold__title'><strong>Manufacturing Turnarounds</strong> is an Operational Turnaround Consulting group. </h1>
                    <h2 className='fold__txt'>We specialize in turning around the operations of Manufacturers who have fallen out of favor with Lenders, Private Equity Sponsors, or Institutional Investors. While some clients prefer to reach out to us directly when they wish to improve operations, more often than not we are called upon by Banks, Restructuring Groups, or Individual Chief Restructuring Officers acting on behalf of their clients.</h2>
                    <Link to='/contact' className='btn' title="Fill out our contact form to work with us"> Work With Us</Link>
                </section>
            </div>



            <section className='services'>
                <div className='container'>
                    <h1 className='title'>Our Services</h1>
                    <div className='services__container'>
                        <Link to='/services/assessments' className="services__item services__item--assessments" title="Learn more about business assessment services">
                            <div className="services__content">
                                <h3 className="services__title">Assessments</h3>
                                <p>Our assessments provide both the company and its financial constituents meaningful and actionable insights.</p>
                            </div>
                        </Link>
                        <Link to='/services/restructuring' className="services__item services__item--restructuring" title="Learn more about Restructuring &amp; Turnaround services">
                            <div className="services__content">
                                <h3 className="services__title">Restructuring &amp; Turnaround</h3>
                                <p>We work to make short-term tactical adjustments, then develop a strategic plan and acquire buy-in from stakeholders.</p>
                            </div>
                        </Link>
                        <Link to='/services/interim' className="services__item services__item--interim" title="Learn more about Interim Management services">
                            <div className="services__content">
                                <h3 className="services__title">Interim Management</h3>
                                <p>We lead companies through critical times and create a roadmap to success that we hand off seamlessly to new management.</p>
                            </div>
                        </Link>
                        <Link to='/services/performance' className="services__item services__item--performance" title="Learn more about Performance Improvement services">
                            <div class="services__content">
                                <h3 className="services__title">Performance Improvement</h3>
                                <p>We seek to understand the organization in its entirety as we identify, prioritize and execute improvements for maximum impact.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='steps'>
                <h2 className='title'>How We Work</h2>
                <div className='steps__item steps__item--1'>
                    <span className='steps__num'>Step 1</span><span className='steps__title'>Assess The Opportunity</span>
                    <p className='steps__txt'>Whether you're still in covenant--or have recently breeched them, through our assessment process our seasoned operations team will first help you identify which levers to pull to get you back on track. </p>
                </div>
                <div className='steps__item steps__item--2'>
                    <span className='steps__num'>Step 2</span><span className='steps__title'>Build a Plan</span>
                    <p className='steps__txt'>Alongside the Financial Restructuring Team, we'll then work with you to create both a strategic and tactical plan, while we also help your restructuring team develop and lead the difficult future conversations required to bring about good change. The kind your lenders and financial partners are demanding you now undertake. </p>
                </div>
                <div className='steps__item steps__item--3'>
                    <span className='steps__num'>Step 3</span><span className='steps__title'>Execute and Monitor the Plan</span>
                    <p className='steps__txt'>We'll then help you identify and put in place those internal and occasional external leaders who will be responsible for execution and sustainability of both the strategic and tactical turnaround plans. Once the right people are on the bus, our team of Manufacturing Specialists, Leadership Coaches and Industrial Psychologists, and Communications Experts will then go to work to help you and your team begin improving people and plant operations. Rather than work in a boardroom, we'll work side by side with you, where value is created and efficiency is either gained or lost.</p>
                </div>
            </section>
            <section className='location'>
                    <div className='location__content'>
                        <h2 className='location__title'>
                            Serving all across the Nation
                        </h2>
                        We believe that face-to-face interaction and communication with our clients helps to effectively understand their business and produce quality results. Our mobility is unhindered by state lines or time zones.
                    </div>
            </section>

            <section className='contact'>
                    <div className='contact__content'>
                        <h2 className='contact__title'>
                            Contact Us
                        </h2>
                        Do you have any further questions about our business consulting firm? How can we help you? Get in touch with us.
                        <Link to='/contact' className='btn btn--alt' title="Fill out our contact form to work with us"> Contact Us</Link>
                    </div>
            </section>
            <Footer />
        </main>

    )
}

export default Home