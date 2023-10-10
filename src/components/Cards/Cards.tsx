'use client';
import React, { useEffect, useState } from 'react';
import styles from './cards.module.scss';
import { cards } from '@/data/data';
import Card from '../Card/Card';
import Link from 'next/link';
import { ExerciseCards, Group, cardObject } from '@/types/types';
import { useAppSelector } from '@/hooks/hooks';
import Button from '../Button/Button';

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
      <ul className={styles.list}>
        {cards.map((filterCard: cardObject) => (
          <li key={filterCard.id}>
            <Link href={`../../exercise/${filterCard.id}`}>
              <Card
                id={filterCard.id}
                thumbnailImg={filterCard.thumbnailImg}
                title={filterCard.title}
                description={filterCard.description}
              />
            </Link>
            <Button text={'Добавить в мою программу'} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
