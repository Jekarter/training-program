import { cardObject } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import styles from './exercisecontainer.module.scss';
import Link from 'next/link';
import { CloudinaryImage } from '@cloudinary/url-gen';

const ExerciseContainer = ({ ...props }: cardObject) => {
  return (
    <div>
      <div>
        <Link href={'/'}>
          <button className={styles.backButton}>Назад</button>
        </Link>
      </div>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.mainImageContainer}>
        <Image
          className={styles.mainImage}
          src={props.img}
          alt={props.title}
          fill={true}
          sizes="100vw"
        />
      </div>
      <div className={styles.textContainer}>
        <h3>Исходное положение</h3>
        <p className={styles.description}>{props.description}</p>
      </div>
      <div className={styles.textContainer}>
        <h3>Выполнение упражнения</h3>
        <ol className={styles.listActions}>
          {props.actionList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.imageContainer}>
          {props.imgSecond ?? (
            <Image
              src={props.imgSecond}
              alt={props.title}
              width={300}
              height={300}
            />
          )}
        </div>
        <p className={styles.description}>{props.descriptionSecond}</p>
      </div>
      <div className={styles.textContainer}>
        <h3>Использование упражнения в бодибилдинге</h3>
        <ul className={styles.listActions}>
          {props.whoUseIt.map((use) => (
            <li key={use}>{use}</li>
          ))}
        </ul>
      </div>
      <div className={styles.textContainer}>
        <h3>Видео выполнения упражнения</h3>
        <div
          className={styles.videoContainer}
          dangerouslySetInnerHTML={{ __html: props.videoUrl }}
        ></div>
      </div>
    </div>
  );
};

export default ExerciseContainer;
