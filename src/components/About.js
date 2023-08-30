import { Link } from 'react-router-dom';
import styles from './layout/about.module.css';
function About(){
    return(
        <div className="container">
            <h1 className={styles.text}>About us</h1>
            <p className={styles.link}>Fake Store Using <Link  className={styles.to} to='https://fakestoreapi.com/products' target='_blank'>API Link</Link> to fetch fake data</p>
        </div>
    )
}

export default About ;