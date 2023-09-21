'use client'
import React from 'react'
import styles from './formfilter.module.scss'

const FormFilter = () => {
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const response = await fetch('', {
      method: 'POST',
      body: formData,
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <section className={styles.filter}>
      <h2 className={styles.title}>Фильтр упражнений</h2>
      <form onSubmit={onSubmit}>
        <fieldset className={styles.group}>
          <legend className={styles.titleFilter}>Где будет проходить тренировка:</legend>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <input className='visually-hidden' id='street' type='radio' name='place' value='street'></input>
              <label htmlFor='street'>На улице/дома</label>
            </li>
            <li className={styles.listItem}>
              <input className='visually-hidden' id='gym' type='radio' name='place' value='gym'></input>
              <label htmlFor='gym'>Тренажерный зал</label>
            </li>
            <li className={styles.listItem}>
              <input className='visually-hidden' id='all' type='radio' name='place' value='all'></input>
              <label htmlFor='all'>Посмотреть все</label>
            </li>
          </ul>
        </fieldset>
        <fieldset className={styles.group}>
          <legend className={styles.titleFilter}>Мышцы по группам:</legend>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <input className='visually-hidden' id='pectoral' type='checkbox' value='pectoral'></input>
              <label htmlFor='pectoral'>Грудные</label>
            </li>
            <li className={styles.listItem}>
              <input className='visually-hidden' id='spinal' type='checkbox' value='spinal'></input>
              <label htmlFor='spinal'>Спинные</label>
            </li>
            <li className={styles.listItem}>
              <input className='visually-hidden' id='shoulder' type='checkbox' value='shoulder'></input>
              <label htmlFor='shoulder'>Плечевые</label>
            </li>
            <li className={styles.listItem}>
              <input className='visually-hidden' id='leg' type='checkbox' value='leg'></input>
              <label htmlFor='leg'>Мышцы ног</label>
            </li>
            <li className={styles.listItem}>
              <input className='visually-hidden' id='arm' type='checkbox' value='arm'></input>
              <label htmlFor='arm'>Мышцы рук</label>
            </li>
            <li className={styles.listItem}>
              <input className='visually-hidden' id='abdominal' type='checkbox' value='abdominal'></input>
              <label htmlFor='abdominal'>Мышцы живота</label>
            </li>
          </ul>
        </fieldset>
        <button type='submit'>Подтвердить</button>
      </form>
    </section>
  )
}

export default FormFilter