import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { ReactSVG } from 'react-svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from "swiper";
import { MainLayout } from '../../layouts /MainLayout';
import { Contacts } from '../components/Contacts';
import { Events } from '../components/Events';
import { Workspaces } from '../components/Workspaces';


const Home: NextPage = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
    };

    return (
    <MainLayout title={'home'}>
    <div className={styles.container}>
        <div className={styles.headerContainer}>
        <Swiper
          className="swiper-main"
          spaceBetween={0}
          slidesPerView={1}
          style={{height: "100vh"}}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={pagination}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className={styles.headerImgContainer}>
                <div >
                  <Image
                      style={{borderRadius: "0 0 10px 10px"}}
                      src="/images/headerbg.png"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      className={styles.headerBg}
                  />
                </div>
            </div>
            <div className={styles.headerText}>
              <h1>Коворкинг</h1>
              <h3><span className={styles.semibold}>А так же:</span> свободное пространство,<br/>
              антикафе и образовательный клуб</h3>
              <button className={styles.buttonEnroll}><span style={{fontWeight: 600, fontSize: 16}}>Оставь заявку</span> получи 1 день бесплатно</button>
            </div>
            <div className={styles.headerBottomTextContainer}>
                <h3>Шесть зон</h3>
                <ReactSVG
                style={{padding: "0 13px", marginTop: "28px"}}
                src="/images/size.svg" />
                <h2>на 400 м²</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
        </div>
        <div className={styles.aboutContainer}>
            <div className={styles.imageStyles} style={{width: "370px", height: "530px", marginRight: "150px"}}>
                <Image
                 src="/images/about.png"
                 layout="fill"
                 objectFit="cover"
                 quality={100}
                />
            </div>
            <div>
            <h1 className={styles.title}>О нас</h1>
            <p>
            «Кто такой Джон Голт?» — место для работы, учёбы и отдыха. Наша цель — создать сообщество инициативных и талантливых людей, которые хотят творить, развиваться, помогать друг другу и быть полезными.<br/><br/>
            Ценим уют и рабочую атмосферу: в пространстве светло и играет лёгкая музыка. Мы сами сделали столы, сварили парты для учёбного класса, смастерили из дуба деревянные светильники. Каждая вещь с историей.<br/><br/>
            Посетители пространства проводят время с пользой: посещают лекции и мастер-классы, работают над проектами, читают и делятся идеями, общаются, играют и заводят новых друзей.
            </p>
            </div>
        </div>
        <div style={{padding: "75px 20px"}}>
            <Workspaces/>
        </div>
        <div style={{padding: "75px 20px"}}>
            <Contacts/>
        </div>

    </div>

    <Events/>


    </MainLayout>
    )
}

export default Home
