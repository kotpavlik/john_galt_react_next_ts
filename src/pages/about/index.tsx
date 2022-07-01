import Router from 'next/router';
import style from '../../styles/button.module.css';
import s from './about.module.css'
import Head from 'next/head';
import {MainLayout} from '../../../layouts /MainLayout';



const About = () => {

    const linkClickHandler =()=> {
        Router.push('/')
    }
    return (
        <MainLayout title={'about'}>
            <Head>
                <title> Who is John Galt | About us</title>
            </Head>
            <div>About Page</div>
            <div className={s.button_wrapper}>
                <button className={style.button} onClick={linkClickHandler}>home</button>
                <button className={style.button} onClick={() => Router.push('/')}>go home</button>
            </div>
        </MainLayout>
    )
}
export default About