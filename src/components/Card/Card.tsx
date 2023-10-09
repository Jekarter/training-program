import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import { cards } from '@/data/data';
import { miniCards } from '@/types/types';
import Button from '../Button/Button';

const Card = ({ id, thumbnailImg, title, description }: miniCards) => {
  const shortDescription = (str: string): string => {
    return str.substring(0, 80) + '...';
  };
  return (
    <>
      <li className={styles.listItem}>
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
        <Button text={'Добавить в мою программу'} />
      </li>
    </>
  );
};

export default Card;
