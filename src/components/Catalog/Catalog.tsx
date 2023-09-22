import React from 'react'
import styles from './catalog.module.scss'
import { cards } from '@/data/data'
import Card from '../Card/Card'

const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <div>
        <ul className={styles.list}>
          {cards.map(card => (
            <Card 
              key={card.id} 
              id={card.id} 
              img={card.img} 
              title={card.title} 
              description={card.description} 
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Catalog