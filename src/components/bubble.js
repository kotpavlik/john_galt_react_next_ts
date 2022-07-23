import styles from '../styles/home.module.css'
export const Bubble = ({ children }) => {
    return (
        <div className={styles.bubble}>
            {children}
        </div>
    )
}
