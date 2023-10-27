'use client';
import React, { useState } from 'react';
import styles from './formfilter.module.scss';
import { useAppDispatch } from '@/hooks/hooks';
import {
  FilterState,
  checkboxFilter,
  radioFilter,
} from '@/store/reducers/ExerciseSlice';
import { Place } from '@/types/types';
import Button from '../Button/Button';
import cl from 'classnames';

const radioButtons = [
  { id: 1, place: 'street', text: 'На улице/дома' },
  { id: 2, place: 'gym', text: 'Тренажерный зал' },
  { id: 3, place: 'all', text: 'Показать все' },
];

const checkboxButtons = [
  { id: 1, muscleGroup: 'pectoral', text: 'Грудные' },
  { id: 2, muscleGroup: 'spinal', text: 'Спинные' },
  { id: 3, muscleGroup: 'shoulder', text: 'Плечевые' },
  { id: 4, muscleGroup: 'leg', text: 'Мышцы ног' },
  { id: 5, muscleGroup: 'arm', text: 'Мышцы рук' },
  { id: 6, muscleGroup: 'abdominal', text: 'Мышцы живота' },
];

const FormFilter = () => {
  const dispatch = useAppDispatch();
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    place: 'all',
    pectoral: false,
    spinal: false,
    shoulder: false,
    leg: false,
    arm: false,
    abdominal: false,
  });

  const saveFilterResults = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(checkboxFilter(selectedFilters));
    dispatch(radioFilter(selectedFilters));
  };

  const getCurrentFiltersCheckboxes = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const updatedFilters = {
      ...selectedFilters,
      [event.target.value]: event.target.checked,
    };
    setSelectedFilters(updatedFilters);
  };
  console.log(selectedFilters);

  const getCurrentFiltersRadio = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const updatedFilters: FilterState = {
      ...selectedFilters,
      place: event.target.value as Place,
    };
    setSelectedFilters(updatedFilters);
  };

  const clearFilterResults = () => {
    const initialFilter: FilterState = {
      place: 'all',
      pectoral: false,
      spinal: false,
      shoulder: false,
      leg: false,
      arm: false,
      abdominal: false,
    };
    dispatch(checkboxFilter(initialFilter));
    dispatch(radioFilter(initialFilter));
    setSelectedFilters(initialFilter);
  };

  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>Фильтр упражнений</h2>
      <form
        name="form-filter"
        className={cl(styles.filterForm, styles.filterContainer)}
        method="POST"
        data-netlify="true"
      >
        <fieldset className={styles.group}>
          <legend className={styles.titleFilter}>
            Где будет проходить тренировка:
          </legend>
          <ul className={styles.list}>
            {radioButtons.map((radioButton) => (
              <li className={styles.listItem} key={radioButton.id}>
                <input
                  className="visually-hidden"
                  id={radioButton.place}
                  type="radio"
                  name="place"
                  value={radioButton.place}
                  onChange={(event) => getCurrentFiltersRadio(event)}
                ></input>
                <label
                  className={styles.radioLabel}
                  htmlFor={radioButton.place}
                >
                  {radioButton.text}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
        <fieldset className={styles.group}>
          <legend className={styles.titleFilter}>Мышцы по группам:</legend>
          <ul className={styles.list}>
            {checkboxButtons.map((checkboxButton) => (
              <li className={styles.listItem} key={checkboxButton.id}>
                <input
                  className="visually-hidden"
                  id={checkboxButton.muscleGroup}
                  type="checkbox"
                  value={checkboxButton.muscleGroup}
                  onChange={(event) => getCurrentFiltersCheckboxes(event)}
                ></input>
                <label
                  className={styles.labelCheckbox}
                  htmlFor={checkboxButton.muscleGroup}
                >
                  {checkboxButton.text}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>

        {/*         <div className={styles.buttonContainer}>
          <Button
            text="Подтвердить"
            onClick={(event) => saveFilterResults(event)}
          />
          <Button
            text="Сбросить фильтр"
            type="reset"
            onClick={() => clearFilterResults()}
          />
        </div> */}
      </form>
    </div>
  );
};

export default FormFilter;
