'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './mainswiper.module.scss';
import mainImage from '../../assets/main-image.jpg';
import mainSecond from '../../assets/main2.jpg';
import mainThird from '../../assets/main3.jpg';
import cl from 'classnames';

const MainSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={cl(styles.mainImage, styles.background)}
            src={mainImage}
            alt=""
            sizes="100vw"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={cl(styles.mainImage, styles.background)}
            src={mainSecond}
            alt=""
            sizes="100vw"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={cl(styles.mainImage, styles.background)}
            src={mainThird}
            alt=""
            sizes="100vw"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainSwiper;
