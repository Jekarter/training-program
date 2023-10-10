import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import { miniCards } from '@/types/types';

const Card = ({ id, thumbnailImg, title, description }: miniCards) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          src={thumbnailImg}
          alt={title}
          fill={true}
          sizes="100%"
        />
      </div>
      <div className={styles.infoCard}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
