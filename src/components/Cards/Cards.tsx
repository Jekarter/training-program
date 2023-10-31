'use client';
import React, { useState } from 'react';
import styles from './cards.module.scss';
import { cards } from '@/data/data';
import Card from '../Card/Card';
import Link from 'next/link';
import { ExerciseCards, cardObject } from '@/types/types';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import Button from '../Button/Button';
import {
  ProgramState,
  addExerciseToProgram,
} from '@/store/reducers/ProgramSlice';

const Cards = () => {
  const checkedFilters = useAppSelector((state) => state.exercises);
  const dispatch = useAppDispatch();
  const [exercisesInProgram, setExercisesInProgram] = useState<ProgramState>({
    myProgram: [],
    countPrograms: 0,
  });

  const [isAddInProgram, setIsAddInProgram] = useState<boolean>(false);

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

  const handleAddExerciseToProgram = (exerciseCard: cardObject) => {
    let exercises = [...exercisesInProgram.myProgram];

    if (exercisesInProgram.myProgram.includes(exerciseCard)) {
      exercises = exercises.filter(
        (exercise) => exercise.id !== exerciseCard.id,
      );
    } else {
      exercises.push(exerciseCard);
    }
    setExercisesInProgram({ ...exercisesInProgram, myProgram: exercises });
    dispatch(
      addExerciseToProgram({ ...exercisesInProgram, myProgram: exercises }),
    );
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
              text={isAddInProgram ? 'Удалить' : 'Добавить в мою программу'}
              onClick={() => handleAddExerciseToProgram(filterCard)}
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
