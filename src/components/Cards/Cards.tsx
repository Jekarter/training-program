'use client';
import React, { useState } from 'react';
import styles from './cards.module.scss';
import { cards } from '@/data/data';
import Card from '../Card/Card';
import Link from 'next/link';
import { cardObject } from '@/types/types';
import { useAppSelector } from '@/hooks/hooks';

const Cards = () => {
  const [showCards, setShowCards] = useState(true);
  const filters = useAppSelector((state) => state.exercises);

  return (
    <div className={styles.catalog}>
      <div>
        <ul className={styles.list}>
          {showCards ??
            cards.filter((card: cardObject) => (
              <Link href={`../../exercise/${card.id}`} key={card.id}>
                <Card
                  id={card.id}
                  thumbnailImg={card.thumbnailImg}
                  title={card.title}
                  description={card.description}
                />
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
