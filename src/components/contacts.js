import styles from '../styles/home.module.css'
export const Contacts = () => {
    return (
        <div className={styles.contactsContainer}>
            <div style={{position: "relative", overflow: "hidden", width: "70%"}}>
                <iframe src="https://yandex.by/map-widget/v1/-/CCUNjIuKhA" frameborder="1" allowfullscreen="true" style={{position: "relative", height: "500px", width: "100%"}}></iframe>
            </div>
            <div className={styles.contactsTextBlock}>
            </div>
        </div>
    )
}
