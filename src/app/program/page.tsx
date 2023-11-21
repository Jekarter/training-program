'use client';
import React from 'react';
import styles from './page.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import Image from 'next/image';
import deleteIcon from '/public/delete.svg';
import { ExerciseCards, cardObject } from '@/types/types';
import { deleteExerciseFromProgram } from '@/store/reducers/ProgramSlice';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import { PDFDownloadLink } from '@react-pdf/renderer';
import TemplatePdf from '@/components/TemplatePdf/TemplatePdf';

const groupsWithText = {
  pectoral: 'Грудные',
  spinal: 'Спинные',
  shoulder: 'Плечевые',
  leg: 'Мышцы ног',
  arm: 'Мышцы рук',
  abdominal: 'Мышцы живота',
};

const Program = () => {
  const listExercises = useAppSelector((state) => state.program);
  const dispatch = useAppDispatch();
  console.log('program', listExercises);

  const handleRemoveItem = (exerciseOnDelete: cardObject) => {
    dispatch(deleteExerciseFromProgram(exerciseOnDelete));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Моя программа:</h1>
      <ul className={styles.list}>
        {listExercises.map((exercise) => (
          <li key={exercise.id} className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={exercise.img}
                width={150}
                height={150}
                alt={exercise.title}
              />
            </div>
            <div className={styles.text}>
              <h3 className={styles.itemTitle}>{exercise.title}</h3>
              <p className={styles.description}>
                {exercise.description.slice(0, 200) + '...'}
              </p>
            </div>
            <div className={styles.containerDelete}>
              <div className={styles.icon}>
                <button
                  className={styles.buttonDelete}
                  onClick={() => handleRemoveItem(exercise)}
                >
                  <Image src={deleteIcon} width={30} height={30} alt="" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {listExercises.length === 0 ? (
        <div className={styles.buttonDownload}>
          <h3 className={styles.textDisable}>
            Вы ещё не добавляли сюда упражнений, нажмите кнопку, чтобы перейти к
            выбору
          </h3>
          <Link href="/">
            <Button text="Найти упражнения" />
          </Link>
        </div>
      ) : (
        <div>
          <div className={styles.info}>
            <p>Всего упражнений: {listExercises.length}</p>
            <p>
              Упражнения на группы:{' '}
              {listExercises.map((el) => `${groupsWithText[el.group]} `)}
            </p>
          </div>
          <div className={styles.buttonDownload}>
            <Button>
              <PDFDownloadLink
                document={<TemplatePdf exercises={listExercises} />}
                fileName="Training-program.pdf"
                style={{
                  textDecoration: 'none',
                }}
              >
                Скачать PDF
              </PDFDownloadLink>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Program;
