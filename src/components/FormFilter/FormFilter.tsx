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
    const clearFilters: FilterState = {
      place: 'all',
      pectoral: false,
      spinal: false,
      shoulder: false,
      leg: false,
      arm: false,
      abdominal: false,
    };
    setSelectedFilters(clearFilters);
    dispatch(checkboxFilter(clearFilters));
    dispatch(radioFilter(clearFilters));
  };

  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>Фильтр упражнений</h2>
      <form
        name="form-filter"
        className={styles.filterForm}
        method="POST"
        data-netlify="true"
      >
        <div className={styles.filterContainer}>
          <fieldset className={styles.group}>
            <legend className={styles.titleFilter}>
              Где будет проходить тренировка:
            </legend>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <input
                  className="visually-hidden"
                  id="street"
                  type="radio"
                  name="place"
                  value="street"
                  onChange={(event) => getCurrentFiltersRadio(event)}
                ></input>
                <label className={styles.radioLabel} htmlFor="street">
                  На улице/дома
                </label>
              </li>
              <li className={styles.listItem}>
                <input
                  className="visually-hidden"
                  id="gym"
                  type="radio"
                  name="place"
                  value="gym"
                  onChange={(event) => getCurrentFiltersRadio(event)}
                ></input>
                <label className={styles.radioLabel} htmlFor="gym">
                  Тренажерный зал
                </label>
              </li>
              <li className={styles.listItem}>
                <input
                  className="visually-hidden"
                  id="all"
                  type="radio"
                  name="place"
                  value="all"
                  defaultChecked
                  onChange={(event) => getCurrentFiltersRadio(event)}
                ></input>
                <label className={styles.radioLabel} htmlFor="all">
                  Посмотреть все
                </label>
              </li>
            </ul>
          </fieldset>
          <fieldset className={styles.group}>
            <legend className={styles.titleFilter}>Мышцы по группам:</legend>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <input
                  className="visually-hidden"
                  id="pectoral"
                  type="checkbox"
                  value="pectoral"
                  onChange={(event) => getCurrentFiltersCheckboxes(event)}
                ></input>
                <label className={styles.labelCheckbox} htmlFor="pectoral">
                  Грудные
                </label>
              </li>
              <li className={styles.listItem}>
                <input
                  className="visually-hidden"
                  id="spinal"
                  type="checkbox"
                  value="spinal"
                  onChange={(event) => getCurrentFiltersCheckboxes(event)}
                ></input>
                <label className={styles.labelCheckbox} htmlFor="spinal">
                  Спинные
                </label>
              </li>
              <li className={styles.listItem}>
                <input
                  className="visually-hidden"
                  id="shoulder"
                  type="checkbox"
                  value="shoulder"
                  onChange={(event) => getCurrentFiltersCheckboxes(event)}
                ></input>
                <label className={styles.labelCheckbox} htmlFor="shoulder">
                  Плечевые
                </label>
              </li>
              <li className={styles.listItem}>
                <input
                  className="visually-hidden"
                  id="leg"
                  type="checkbox"
                  value="leg"
                  onChange={(event) => getCurrentFiltersCheckboxes(event)}
                ></input>
                <label className={styles.labelCheckbox} htmlFor="leg">
                  Мышцы ног
                </label>
              </li>
              <li className={styles.listItem}>
                <input
                  className="visually-hidden"
                  id="arm"
                  type="checkbox"
                  value="arm"
                  onChange={(event) => getCurrentFiltersCheckboxes(event)}
                ></input>
                <label className={styles.labelCheckbox} htmlFor="arm">
                  Мышцы рук
                </label>
              </li>
              <li className={styles.listItem}>
                <input
                  className="visually-hidden"
                  id="abdominal"
                  type="checkbox"
                  value="abdominal"
                  onChange={(event) => getCurrentFiltersCheckboxes(event)}
                ></input>
                <label className={styles.labelCheckbox} htmlFor="abdominal">
                  Мышцы живота
                </label>
              </li>
            </ul>
          </fieldset>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            text="Подтвердить"
            onClick={(event) => saveFilterResults(event)}
          />
          <Button
            text="Сбросить фильтр"
            type="reset"
            onClick={() => clearFilterResults()}
          />
        </div>
      </form>
    </div>
  );
};

export default FormFilter;
