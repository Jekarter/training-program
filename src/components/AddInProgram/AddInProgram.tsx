'use client';
import React, { useState } from 'react';
import Button from '../Button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  ProgramState,
  addExerciseToProgram,
} from '@/store/reducers/ProgramSlice';
import { cardObject } from '@/types/types';
import styles from './addinprogramm.module.scss';

interface AddInProgramProps {
  filterCard: cardObject;
}

const AddInProgram = ({ filterCard }: AddInProgramProps) => {
  const dispatch = useAppDispatch();
  const [exercisesInProgram, setExercisesInProgram] = useState<ProgramState>({
    myProgram: [],
    countPrograms: 0,
  });
  console.log('click');

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
    console.log(exercisesInProgram);
    dispatch(
      addExerciseToProgram({ ...exercisesInProgram, myProgram: exercises }),
    );
  };

  return (
    <div>
      <Button
        className={styles.button}
        text={'Добавить в мою программу'}
        onClick={() => handleAddExerciseToProgram(filterCard)}
      />
    </div>
  );
};

export default AddInProgram;
