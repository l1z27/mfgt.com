
import Header from '../Header'
import Footer from '../Footer'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.sass'

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_jrlzbjj',
            'template_zstdwlt',
            form.current,
            'xRLYjhrC2lDWMZVb9'
        ).then(
            () => {
                //success handler - need to hide form and show success message
                alert('success')
                window.location.reload(false)
            },
            () => {
                //fail handler - need to stylize form for error handling
                alert('fail')
                window.location.reload(false)
            }
        )
    }

    return (

        <main className='contact'>
            <Header />
            <section className='container'>
                <main>
                <h2 className='title'>Contact Us</h2>
                <p>Thank you for your interest in Manufacturing Turnarounds. Please fill out the form below if you have any questions or need more information.</p>
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <input type='hidden' name='subject' val='Manufacturing Turnarounds Contact Form' maxlength="80" />
                    <label className='form__label form__label-name'>
                        Name
                        <input placeholder='Name' type='text' name='name' className='form__input' maxlength="80" required />
                    </label>
                    <label className='form__label form__label-company'>
                        Company
                        <input placeholder='Company' type='text' name='company'  maxlength="80" className='form__input' required />
                    </label>
                    <label className='form__label form__label-phone'>
                        Phone
                        <input placeholder='Phone' type='number' name='phone'  maxlength="15" className='form__input' required />
                    </label>
                    <label className='form__label form__label-email'>
                        Email
                        <input placeholder='email@coder.xyz' type='email' name='email' maxlength="80" className='form__input' required />
                    </label>
                    <label className='form__label form__label-message'>
                        Message
                        <textarea placeholder='Message' name='message'  maxlength="2000" rows="6" className='form__input' required></textarea> 
                    </label>
                    <input type='submit' className='form__submit' value='send' />
                </form>
                </main>
            </section>
            <Footer />
        </main>


    )
}

export default Contact