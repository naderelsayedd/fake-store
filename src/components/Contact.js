import styles from './layout/contact.module.css';
function Contact(){
    return(
        <div className="container text-center">
            <h1 className={styles.h1}>Contact Us</h1>
            <div className={styles.form}>
                <form>
                    <input type='text' placeholder='Your Full Name' className='form-control m-3' id='name'/>
                    
                    <input type='email' placeholder='Your Email' className='form-control m-3' id='email'/>

                    <textarea className='form-control m-3' placeholder='Your Message'/>

                    <input type='submit' value="Send" className='btn btn-primary m-3'/>
                </form>
            </div>
        </div>
    )
}

export default Contact;