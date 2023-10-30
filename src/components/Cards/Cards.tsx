'use client';
import React from 'react';
import styles from './cards.module.scss';
import { cards } from '@/data/data';
import Card from '../Card/Card';
import Link from 'next/link';
import { ExerciseCards, cardObject } from '@/types/types';
import { useAppSelector } from '@/hooks/hooks';
import Button from '../Button/Button';

const Cards = () => {
  const checkedFilters = useAppSelector((state) => state.exercises);
  console.log('filters', checkedFilters);

  const getFilterResultsRadio = (cards: ExerciseCards) => {
    const filteredPlace =
      checkedFilters.place === 'all'
        ? cards
        : cards.filter(
            (filteredCard) => filteredCard.place == checkedFilters.place,
          );

    return checkedFilters.muscleGroups[0]
      ? filteredPlace.filter((filteredMuscleGroup) =>
          checkedFilters.muscleGroups.includes(filteredMuscleGroup.group),
        )
      : filteredPlace;
  };

  return (
    <div className={styles.catalog}>
      <ul className={styles.list}>
        {getFilterResultsRadio(cards).map((filterCard: cardObject) => (
          <li className={styles.listItem} key={filterCard.id}>
            <Link href={`../../exercise/${filterCard.id}`}>
              <Card
                id={filterCard.id}
                thumbnailImg={filterCard.thumbnailImg}
                title={filterCard.title}
                description={filterCard.description}
              />
            </Link>
            <Button
              className={styles.button}
              text={'Добавить в мою программу'}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;

/* 

  const filters = useAppSelector((state) => state.exercises);
  console.log('filters', filters);
  const place = {
    all: () => {},
  };

  const getFilterResultsRadio = (cards: ExerciseCards) => {
    console.log('otrabotala');
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
  };*/
