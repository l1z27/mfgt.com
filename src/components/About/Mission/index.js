// import { Link } from 'react-router-dom'
import Header from '../../Header'
import Footer from '../../Footer'
import SidebarAbout from '../SidebarAbout'


const Mission = () => {


    return (

        <main className='mission'>
            <Header />
            
            <section className='container container--flex'>
                <SidebarAbout />
                <main>
                    {/* <nav className='breadcrumbs'>
                        <ul>
                            <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">   
                                <u><Link to='/about' className='btn' title="Jump back to the about page" itemprop="url"> About</Link></u>
                            </li>
                            <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
                                <span itemprop="title"> Mission</span>
                            </li>  
                        </ul>
                    </nav> */}
                    <h1 className='title'>Organizational Change Solutions</h1>
                    <p>All Organization Change is behavioral in nature. So understanding the current state of your culture helps us appreciate the likelihood of your organization sustaining the good changes we frequently help organization's achieve during our assignment.</p>

                    <p>To make it possible, we'll add to your team's bench strength by continuously improving upon it. Using our well known experts in Organizational Psychology, Communications, Leadership Development and Coaching, , we give you a peak into what behavior is possible down the road once your Leadership team is aligned. Especially when your leaders are free to perform at their best, feel connected with the aim of the organization's new objectives, and have someone to teach, coach, and guide them through the various operational, leadership, and conversational skills required to execute on a short, medium, or long-term restructuring plan.</p>

                    <h2 className='title'>Our Approach To Organizational Change</h2>
                    <p>Dr. Ed Deci and Dr. Richard Ryan, co-creators of the Self Determination Theory, formulated in their hypothesis that all humans are born with high levels of Intrinsic Motivation. Dr. W. Edwards Deming further hypothesized that over time, however, that same high level of intrinsic motivation goes away when leaders, school administrators, parents, and bosses do little to improve it. </p>

                    <p>Deci and Ryan have now scientifically proven that once fear is driven out of a culture, where feel free to perform at our best, relate to an aim, mission, or a task, and have the skills or team members who can help us achieve that objective, our Intrinsic Motivation will be increase.</p>

                    <p>We have adopted this approach in everything we do because we've experienced what happens to motivation when the right culture is in place. Whether we're physically working on a production line, improving a sales culture by going on a sales call, or coaching Managers through difficult employee issues,  our aim is to continually increase everyone's Intrinsic Motivation. </p>

                    <p>We create new working environments where autonomy, relatedness, and competency are at the central core of increasing human motivation.  Creativity and curiosity are, after all, free. Traditional capital is not. </p>

                    <p>Why pay for improvements, when your team will give you their best just for the asking. </p>

                    <p>But you'll have to earn your employee's trust first, then ask later for their best ideas. We're prepared teach you how to do both, so you'll eventually have more engaged employees and far less bank debt.
                    </p>
                </main>
            </section>
            


            <Footer />
        </main>

    )
}

export default Mission