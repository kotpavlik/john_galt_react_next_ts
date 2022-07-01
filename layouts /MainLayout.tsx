import Link from 'next/link';
import Head from 'next/head';
import {ReactNode} from 'react';
import styles from '../src/styles/mainLayout.module.scss'
import Image from 'next/image';
import logo from '../public/logo.svg'
import {FileTextOutlined, PhoneOutlined, SendOutlined} from '@ant-design/icons';


type propsType = {
    children?: ReactNode
    title?:string
}

export const MainLayout = ({children,title}:propsType) => {
    return (
        <>
            <Head>
                <title> Who is John Galt | {title}</title>
                <meta name="keywords" content="coworking in Minsk "/>
                <meta name="description" content="working out in your home, fast internet and testy coffee"/>
                <meta charSet="utf-8"/>
            </Head>
            <nav className={styles.nav}>
                <div className={styles.logo_wrapper}>
                    <Image className={styles.logo} src={logo} alt="logotype" width={146} height={89}/>
                </div>
                <div className={styles.link_wrapper}>
                    <div><PhoneOutlined /> <Link href="/"><a> +375 44 721-00-40 </a></Link></div>
                    <div><FileTextOutlined /><Link href="/"><a> Записаться на пробный день</a></Link></div>
                    <div><SendOutlined /><Link href="/"><a> Связаться через мессенджер </a></Link></div>
            </div>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}