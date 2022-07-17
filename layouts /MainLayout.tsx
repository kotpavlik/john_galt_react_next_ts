import Link from 'next/link';
import Head from 'next/head';
import { ReactNode, useRef } from 'react';
import styles from '../src/styles/mainLayout.module.scss'
import Image from 'next/image';
import logo from '../public/logo.svg'
import Lottie from "lottie-react";
import callAnimation from "../public/icons/call.json";
import chatAnimation from "../public/icons/chat.json";
import enrollAnimation from "../public/icons/enroll.json";

type propsType = {
    children? : ReactNode
    title? : string
}

export const MainLayout = ({ children, title } : propsType) => {
    const lottieRef1 = useRef();
    const lottieRef2 = useRef();
    const lottieRef3 = useRef();
    function onMouseEnter(lottieRef) {
        lottieRef.current.goToAndPlay(0);
    }
    function onMouseLeave(lottieRef) {
        lottieRef.current.goToAndStop(0);
    }
    return (
        <>
            <Head>
                <title> Who is John Galt | {title}</title>
                <meta name="keywords" content="coworking in Minsk "/>
                <meta name="description" content="working out in your home, fast internet and testy coffee"/>
                <meta charSet="utf-8"/>
            </Head>
            <nav className={styles.nav}>
                <div>
                    <div className={styles.logo_wrapper}>
                        <Image className={styles.logo} src={logo} alt="logotype" width={146} height={89}/>
                        <div className={styles.contacts_wrapper}>
                            <div onMouseEnter={() => onMouseEnter(lottieRef1)} onMouseLeave={() => onMouseLeave(lottieRef1)} ><Lottie  lottieRef={lottieRef1} animationData={callAnimation} loop={false} /> <Link href="/"><a> +375 44 721-00-40 </a></Link></div>
                            <div onMouseEnter={() => onMouseEnter(lottieRef2)} onMouseLeave={() => onMouseLeave(lottieRef2)}><Lottie    lottieRef={lottieRef2}  animationData={chatAnimation} loop={false} /><Link href="/"><a> Запись на пробный день</a></Link></div>
                            <div onMouseEnter={() => onMouseEnter(lottieRef3)} onMouseLeave={() => onMouseLeave(lottieRef3)}><Lottie    lottieRef={lottieRef3}  animationData={enrollAnimation} loop={false} /><Link href="/"><a> Связаться через мессенджер </a></Link></div>
                        </div>
                    </div>
                    <div className={styles.link_wrapper}>
                        <div > <Link href="/"><a> О нас</a></Link></div>
                        <div><Link href="/"><a> Цены</a></Link></div>
                        <div ><Link href="/"><a> Мероприятия </a></Link></div>
                        <div ><Link href="/"><a> Контакты </a></Link></div>
                    </div>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}
