import React from 'react'
import styles from './cards.module.scss'
import { cards } from '@/data/data'
import Card from '../Card/Card'
import Link from 'next/link'

const Cards = () => {
  return (
    <div className={styles.catalog}>
      <div>
        <ul className={styles.list}>
          {cards.map(card => (
            <Link href={`/`} key={card.id}>
              <Card 
                id={card.id} 
                img={card.img} 
                title={card.title} 
                description={card.description} 
              />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Cards