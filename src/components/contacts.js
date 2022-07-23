import styles from '../styles/home.module.css'
import { MdAlternateEmail, MdPhoneInTalk, MdShareLocation } from "react-icons/md";
export const Contacts = () => {
    return (
        <div className={styles.contactsContainer}>
            <div style={{position: "relative", overflow: "hidden", width: "60%", borderRadius: 10, height: "500px"}}>
                <iframe src="https://yandex.by/map-widget/v1/-/CCUNjIuKhA" frameBorder="1" allowFullScreen={true} style={{position: "relative", height: "500px", width: "100%"}}></iframe>
            </div>
            <div className={styles.contactsTextBlock}>
                <p><span style={{fontWeight: 600}}>Email:</span>contact@john-galt.by</p>
                <p><span style={{fontWeight: 600}}>Телефон:</span> +375 44 721-00-40</p>
                <p><span style={{fontWeight: 600}}>Адрес:</span>Улица Шорная дом 20,<br/> помещение 1Н,<br/>
                Минск, Беларусь, 220004</p>
            </div>
        </div>
    )
}
