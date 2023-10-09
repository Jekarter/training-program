'use client';
import React, { useEffect, useState } from 'react';
import styles from './cards.module.scss';
import { cards } from '@/data/data';
import Card from '../Card/Card';
import Link from 'next/link';
import { ExerciseCards, Group, cardObject } from '@/types/types';
import { useAppSelector } from '@/hooks/hooks';

const Cards = () => {
  const filters = useAppSelector((state) => state.exercises);

  const getFilterResultsRadio = (cards: ExerciseCards) => {
    if (filters.place === 'all') {
      if (Object.values(filters).includes(true)) {
        return cards.filter(
          (filteredCheckbox) => filters[filteredCheckbox.group],
        );
      }
      return cards;
    }
    if (filters.place === 'gym' || 'street') {
      if (Object.values(filters).includes(true)) {
        return cards
          .filter((filteredCard) => filteredCard.place == filters.place)
          .filter((filteredCheckbox) => filters[filteredCheckbox.group]);
      }
      return cards.filter(
        (filteredCard) => filteredCard.place == filters.place,
      );
    }

    return [];
  };

  return (
    <div className={styles.catalog}>
      <div>
        <ul className={styles.list}>
          {getFilterResultsRadio(cards).map((filterCard: cardObject) => (
            <Link href={`../../exercise/${filterCard.id}`} key={filterCard.id}>
              <Card
                id={filterCard.id}
                thumbnailImg={filterCard.thumbnailImg}
                title={filterCard.title}
                description={filterCard.description}
              />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
