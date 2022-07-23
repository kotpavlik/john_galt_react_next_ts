import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '../styles/home.module.css'
import Image from 'next/image';
import { IconContext } from "react-icons";
import { MdSquareFoot } from 'react-icons/md';
import { GiHumanPyramid } from 'react-icons/gi';
import { FaMoneyCheck } from 'react-icons/fa';

const images = [
    '/images/bigroom.png',
    '/images/coffeeroom.png',
    '/images/classroom.png',
    '/images/office.jpg',
    '/images/skyperoom.jpg',
    '/images/skyperoom.jpg'
]
export const Rent = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<Image class="' + className + '" src='+images[index]+'/>';
        },
    };

    return (
        <div className={`rent_slider ${styles.rent_block}`}>

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay]}
            loop
            autoplay
            slidesPerView={1}
            style={{height: "640px"}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={pagination}
        >
            <SwiperSlide key="0" >
                <div className={styles.slideWrapper}>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>Большой<br/>зал</h3>
                        <p>
                            Рабочее пространство на 100 человек. Здесь мы проводим крупные лекции и мероприятия. Приходите работать, играть в игры, общаться за чашечкой кофе или просто отметить день рождения с друзьями.
                        </p>
                        <ul className={styles.roomParamsList}>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <GiHumanPyramid />
                                <span>Вмещает: 80-100 чел.</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <MdSquareFoot />
                                <span>Площадь:  90м²</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <FaMoneyCheck />
                                <span>Стоимость: 90 BYN/час</span>
                              </div>
                            </IconContext.Provider></li>
                        </ul>
                        <button className={styles.buttonOrder}><span style={{fontWeight: 600, fontSize: 16}}>Оставить заявку</span></button>
                    </div>
                    <div className={styles.image}>
                    <Image
                      src={images[0]}
                      alt="Большой зал"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                     />
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide key="1" >
                <div className={styles.slideWrapper}>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>Кофейная<br/>зона</h3>
                        <p>
                            Уютная зона с буфетом: кофе из профессиональной кофе-машины La Spaziale S5 или гейзерной кофеварки, чай, камин, мини-библиотека.
                        </p>
                        <ul className={styles.roomParamsList}>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <GiHumanPyramid />
                                <span>Вмещает: 20-25 чел.</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <MdSquareFoot />
                                <span>Площадь:  50м²</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <FaMoneyCheck />
                                <span>Стоимость: 60 BYN/час</span>
                              </div>
                            </IconContext.Provider></li>
                        </ul>
                        <button className={styles.buttonOrder}><span style={{fontWeight: 600, fontSize: 16}}>Оставить заявку</span></button>
                    </div>
                    <div className={styles.image}>
                    <Image
                      src={images[1]}
                      alt="Кофейная зона"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                     />
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide key="2" >
                <div className={styles.slideWrapper}>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>Классная<br/>комната</h3>
                        <p>
                            Закрытая комнатас проектором и доской для занятий, лекций или мастер-классов.
                        </p>
                        <ul className={styles.roomParamsList}>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <GiHumanPyramid />
                                <span>Вмещает: 20 чел.</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <MdSquareFoot />
                                <span>Площадь:  35м²</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <FaMoneyCheck />
                                <span>Стоимость: 40 BYN/час</span>
                              </div>
                            </IconContext.Provider></li>
                        </ul>
                        <button className={styles.buttonOrder}><span style={{fontWeight: 600, fontSize: 16}}>Оставить заявку</span></button>
                    </div>
                    <div className={styles.image}>
                    <Image
                      src={images[2]}
                      layout="fill"
                      alt="Классная комната"
                      objectFit="cover"
                      quality={100}
                     />
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide key="4" >
                <div className={styles.slideWrapper}>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>Офисная<br/>комната</h3>
                        <p>
                            Закрытая комнатас проектором и доской для занятий, лекций или мастер-классов.
                        </p>
                        <ul className={styles.roomParamsList}>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <GiHumanPyramid />
                                <span>Вмещает: 20 чел.</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <MdSquareFoot />
                                <span>Площадь:  10м²</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <FaMoneyCheck />
                                <span>Стоимость: 40 BYN/час</span>
                              </div>
                            </IconContext.Provider></li>
                        </ul>
                        <button className={styles.buttonOrder}><span style={{fontWeight: 600, fontSize: 16}}>Оставить заявку</span></button>
                    </div>
                    <div className={styles.image}>
                    <Image
                      src={images[3]}
                      alt="Офисная комната"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                     />
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide key="5" >
                <div className={styles.slideWrapper}>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>Игровая/<br/>Переговорка</h3>
                        <p>
                            Закрытая комнатас проектором и доской для занятий, лекций или мастер-классов.
                        </p>
                        <ul className={styles.roomParamsList}>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <GiHumanPyramid />
                                <span>Вмещает: 20 чел.</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <MdSquareFoot />
                                <span>Площадь:  7м²</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <FaMoneyCheck />
                                <span>Стоимость: 40 BYN/час</span>
                              </div>
                            </IconContext.Provider></li>
                        </ul>
                        <button className={styles.buttonOrder}><span style={{fontWeight: 600, fontSize: 16}}>Оставить заявку</span></button>
                    </div>
                    <div className={styles.image}>
                    <Image
                      src={images[4]}
                      layout="fill"
                      alt="Игровая/Переговорка"
                      objectFit="cover"
                      quality={100}
                     />
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide key="6" >
                <div className={styles.slideWrapper}>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>Магизин<br/>одежды</h3>
                        <p>
                            Закрытая комнатас проектором и доской для занятий, лекций или мастер-классов.
                        </p>
                        <ul className={styles.roomParamsList}>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <GiHumanPyramid />
                                <span>Вмещает: 20 чел.</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <MdSquareFoot />
                                <span>Площадь:  21м²</span>
                              </div>
                            </IconContext.Provider>
                            </li>
                            <li>
                            <IconContext.Provider value={{ color: "var(--primary)", className: "icon-inline" }}>
                              <div>
                                <FaMoneyCheck />
                                <span>Стоимость: 40 BYN/час</span>
                              </div>
                            </IconContext.Provider></li>
                        </ul>
                        <button className={styles.buttonOrder}><span style={{fontWeight: 600, fontSize: 16}}>Оставить заявку</span></button>
                    </div>
                    <div className={styles.image}>
                    <Image
                      src={images[5]}
                      alt="Магазин одежды"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                     />
                  </div>
                </div>
            </SwiperSlide>
         </Swiper>
         </div>
    )
}
