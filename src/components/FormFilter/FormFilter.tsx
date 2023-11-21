'use client';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './formfilter.module.scss';
import { useAppDispatch } from '@/hooks/hooks';
import {
  FilterState,
  checkboxFilter,
  radioFilter,
} from '@/store/reducers/ExerciseSlice';
import { ExerciseCards, Group, Place, cardObject } from '@/types/types';
import Button from '../Button/Button';
import { usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const placesWithText = [
  { id: 1, place: 'street', text: 'На улице/дома' },
  { id: 2, place: 'gym', text: 'Тренажерный зал' },
  { id: 3, place: 'all', text: 'Показать все', defaultChecked: true },
];

const groupsWithText = [
  { id: 1, muscleGroup: 'pectoral', text: 'Грудные' },
  { id: 2, muscleGroup: 'spinal', text: 'Спинные' },
  { id: 3, muscleGroup: 'shoulder', text: 'Плечевые' },
  { id: 4, muscleGroup: 'leg', text: 'Мышцы ног' },
  { id: 5, muscleGroup: 'arm', text: 'Мышцы рук' },
  { id: 6, muscleGroup: 'abdominal', text: 'Мышцы живота' },
];

const FormFilter = () => {
  const [filterState, setFilterState] = useState<FilterState>({
    place: 'all',
    muscleGroups: [],
  });
  const [checkedCheckboxes, setCheckedCheckboxes] = useState({
    pectoral: false,
    spinal: false,
    shoulder: false,
    leg: false,
    arm: false,
    abdominal: false,
  });
  const dispatch = useAppDispatch();

  const router = useRouter();
  const searchParams = useSearchParams()!;
  const selectedPlace = searchParams.get('filter') as string;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  /*  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );  */

  const saveFilterResults = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(checkboxFilter(filterState));
    dispatch(radioFilter(filterState));
  };

  const getCurrentFiltersCheckboxes = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let muscleGroup: Group[] = [...filterState.muscleGroups];

    setCheckedCheckboxes({
      ...checkedCheckboxes,
      [event.target.value]: event.target.checked,
    });

    if (event.target.checked) {
      muscleGroup.push(event.target.value as Group);
    } else {
      muscleGroup = muscleGroup.filter(
        (group) => group !== (event.target.value as Group),
      );
    }
    setFilterState({ ...filterState, muscleGroups: muscleGroup });
  };

  const getCurrentFiltersRadio = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFilterState({ ...filterState, place: event.target.value as Place });
    console.log(event.target.value);
  };

  const clearFilterResults = () => {
    filterState.place = 'all';
    filterState.muscleGroups = [];
    setCheckedCheckboxes({
      pectoral: false,
      spinal: false,
      shoulder: false,
      leg: false,
      arm: false,
      abdominal: false,
    });
    dispatch(checkboxFilter(filterState));
    dispatch(radioFilter(filterState));
  };

  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>Фильтр упражнений</h2>
      <form name="form-filter" className={styles.filterForm} method="POST">
        <div className={styles.filterContainer}>
          <fieldset className={styles.group}>
            <legend className={styles.titleFilter}>
              Где будет проходить тренировка:
            </legend>
            <ul className={styles.list}>
              {placesWithText.map((radioButton) => (
                <li className={styles.listItem} key={radioButton.id}>
                  <Link
                    href={`?place=&${new URLSearchParams({
                      place: selectedPlace,
                    })}`}
                  >
                    <input
                      className="visually-hidden"
                      id={radioButton.place}
                      type="radio"
                      name="place"
                      value={radioButton.place}
                      defaultChecked={radioButton.defaultChecked}
                      onChange={(event) => getCurrentFiltersRadio(event)}
                    ></input>
                    <label
                      className={styles.radioLabel}
                      htmlFor={radioButton.place}
                    >
                      {radioButton.text}
                    </label>
                  </Link>
                </li>
              ))}
            </ul>
          </fieldset>
          <fieldset className={styles.group}>
            <legend className={styles.titleFilter}>Мышцы по группам:</legend>
            <ul className={styles.list}>
              {groupsWithText.map((checkboxButton) => (
                <li className={styles.listItem} key={checkboxButton.id}>
                  <input
                    className="visually-hidden"
                    id={checkboxButton.muscleGroup}
                    type="checkbox"
                    value={checkboxButton.muscleGroup}
                    checked={
                      checkedCheckboxes[checkboxButton.muscleGroup as Group]
                    }
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
        </div>

        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            text="Подтвердить"
            onClick={(event) => saveFilterResults(event)}
          />
          <Button
            className={styles.buttonReset}
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

/*   const [selectedPlace, setSelectedPlace] = useState<Place>('all'); 

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedPlace = searchParams.place
  
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const getUpdatedUrlCategories = (place: Place) => {
    router.push(pathname + createQueryString(`place`, `${place}`), {
      scroll: false,
    });
  };
   */
