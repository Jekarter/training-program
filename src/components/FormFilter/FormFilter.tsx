'use client';
import React from 'react';
import styles from './formfilter.module.scss';

const FormFilter = () => {
  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log(event);
    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData.toString()).toString(),
    })
      .then(() => alert('Thank you for your submission'))
      .catch((error) => alert(error));
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
                ></input>
                <label className={styles.labelCheckbox} htmlFor="abdominal">
                  Мышцы живота
                </label>
              </li>
            </ul>
          </fieldset>
        </div>
        <div className={styles.buttonContainer}>
          <input type="hidden" name="form-name" value="form-filter" />
          <input type="submit" value="Подтвердить" />
          <button type="submit" onSubmit={(event) => handleSubmit(event)}>
            Подтвердить
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormFilter;
