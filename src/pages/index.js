import { NextPage } from 'next'
import styles from '../styles/home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { ReactSVG } from 'react-svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from "swiper";
import { MainLayout } from '../../layouts /MainLayout';
import { Contacts } from '../components/Contacts';
import { Events } from '../components/Events';
import { Workspaces } from '../components/Workspaces';
import { Bubble } from '../components/Bubble';
import { Rent } from '../components/Rent';


const Home = () => {
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
          autoplay
          autoplayTimeout={10}
          slidesPerView={1}
          style={{height: "100vh"}}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={pagination}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className={styles.headerImgContainer}>
                <div >
                  <Image
                      style={{borderRadius: "0 0 10px 10px"}}
                      src="/images/headerbg.png"
                      layout="fill"
                      alt="Большая комната"
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
                 alt="О нас"
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
        <div className={styles.container}>
            <div className={styles.bubble_container}>
                <Bubble>Быстрый Wi-Fi (1Gbit LAN)</Bubble>
                <Bubble>Проектор для лекций и презентаций</Bubble>
                <Bubble>PlayStation 5</Bubble>
                <Bubble>VR Oculus Quest 2</Bubble>
                <Bubble>Книги для обучения</Bubble>
                <Bubble>Мастерклассы</Bubble>
                <Bubble>Бесплатный кофе и чай</Bubble>
                <Bubble>Переговорная комната</Bubble>
                <Bubble>Настольные игры</Bubble>
                <Bubble>Микроволновка и холодильник</Bubble>
            </div>
        </div>
        <div style={{padding: "75px 20px"}}>
            <Workspaces/>
        </div>

        </div>
        <div style={{padding: "75px 40px", margin: "80px 0", backgroundColor: "var(--primary)", textAlign: "center", position: "relative", overflow: "hidden"}}>
            <h1 className={styles.title} style={{color: "var(--background)", paddingBottom: "40px"}}>Аренда помещений</h1>

            <div className={styles.bg_pencil}><Image
                src="/images/bg_pencil.png"
                layout="fill"
                alt=""
                objectFit="cover"
                quality={100}
            /></div>
            <div  className={styles.container} style={{padding: "0 20px", position: "relative", borderRadius: "10px"}}>
                <div style={{backgroundColor: "var(--background)", borderRadius: "10px", overflow: "hidden"}}>
                    <Rent/>
                </div>
            </div>
            <div className={styles.bg_flower}><Image
                src="/images/bg_flower.png"
                layout="fill"
                objectFit="cover"
                alt=""
                quality={100}
            /></div>
        </div>
        <div className={styles.container}>

        <div style={{padding: "75px 20px", height: "200px"}}>

        </div>
        <Events/>
        <div style={{padding: "75px 20px", height: "200px"}}>

        </div>
        <div style={{padding: "75px 0px"}}>
            <h1 className={styles.title}>Контакты</h1><br/>
            <Contacts/>
        </div>



    </div>
    </MainLayout>
    )
}

export default Home
