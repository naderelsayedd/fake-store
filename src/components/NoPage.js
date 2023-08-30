import styles from './layout/error.module.css';

export default function Error() {
    return(
        <div className="container">
            <div className={styles.error}>
            <h1 className={styles.text}>404</h1>
            <h1 className={styles.text}>Page Not Found</h1>
            </div>
        </div>
    )
}