import React from 'react'
import styles from './card.module.scss'
import Image from 'next/image'
import { cards } from '@/data/data'
import { cardObject } from '@/types/types'


const Card = ({id, img, title, description}: cardObject) => {

  const shortDescription = (str: string): string => {
    return str.substring(0, 80) + '...'
  }
  return (
    <>
      <li className={styles.listItem}>
        <div className={styles.imageContainer}>
          <Image className={styles.img} src={img} alt={title} fill={true}/>
        </div>
        <div className={styles.infoCard}>
          <h3 className={styles.title}>{title}</h3>
          {/* <p className={styles.description}>{shortDescription(description)}</p> */}
        </div>
        <div className={styles.buttonContainer}>
          <button>Добавить в мою программу</button>
        </div>
      </li>
    </>
  )
}

export default Card