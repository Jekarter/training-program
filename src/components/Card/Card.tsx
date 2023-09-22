import React from 'react'
import styles from './card.module.scss'
import Image from 'next/image'
import { cards } from '@/data/data'
import { cardObject } from '@/types/types'

interface CardProps extends cardObject {
  key: number;
}

const Card = ({key, id, img, title, description}: CardProps) => {

  const shortDescription = (str: string): string => {
    return str.substring(0, 80) + '...'
  }
  return (
    <>
      <li key={key} className={styles.listItem}>
        <div className={styles.imageContainer}>
          <Image className={styles.img} src={img} alt={title} width={300} height={300}/>
        </div>
        <div className={styles.infoCard}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{shortDescription(description)}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button>Добавить в мою программу</button>
        </div>
      </li>
    </>
  )
}

export default Card