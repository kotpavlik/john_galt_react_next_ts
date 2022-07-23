import {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper';
import 'swiper/css';
import styles from '../styles/home.module.css'
import Image from 'next/image';
export const Workspaces = () => {

    return (
        <div className="ws_slider">
        <h1 className={styles.titleWorkspace} >7 рабочих зон</h1>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay]}
            spaceBetween={20}
            loop
            autoplay
            slidesPerView={4}
            mousewheel={true}
            style={{height: "450px"}}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide key="0" >
                <div>
                  <Image
                      src="/images/bigroom.png"
                      layout="fill"
                      alt="Большая комната"
                      objectFit="cover"
                      quality={100}
                      className={styles.headerBg}
                  />
                  <div className={styles.slideTitle}>Бигрум</div>
                </div>
            </SwiperSlide>

            <SwiperSlide key="2">
              <div >
                <Image
                    src="/images/coffeeroom.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className={styles.headerBg}
                />
                <div className={styles.slideTitle}>Кофейная</div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="3">
              <div >
                <Image
                    src="/images/classroom.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Классная комната"
                    quality={100}
                    className={styles.headerBg}
                />
                <div className={styles.slideTitle}>Классная</div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="4">
              <div >
                <Image
                    src="/images/office.jpg"
                    layout="fill"
                    alt="Офисная комната"
                    objectFit="cover"
                    quality={100}
                    className={styles.headerBg}
                />
                <div className={styles.slideTitle}>Офис</div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="5">
              <div >
                <Image
                    src="/images/gallery.png"
                    alt="Галерея"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className={styles.headerBg}
                />
                <div className={styles.slideTitle}>Галерея</div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="6">
              <div >
                <Image
                    src="/images/pinkpunk.jpg"
                    layout="fill"
                    alt="Магазин одежды"
                    objectFit="cover"
                    quality={100}
                    className={styles.headerBg}
                />
                <div className={styles.slideTitle}>Магазин одежды</div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="7">
              <div >
                <Image
                    src="/images/skyperoom.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Игровая/Переговорка"
                    quality={100}
                    className={styles.headerBg}
                />
                <div className={styles.slideTitle}>Игровая/Переговорка</div>
              </div>
            </SwiperSlide>
         </Swiper>
         </div>
    )
}
