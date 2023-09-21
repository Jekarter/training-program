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
        <fieldset>
          <legend>Мышцы по группам:</legend>
          <ul>
            <li>
              <label>
                <input type='checkbox' value=''></input>
              </label>
            </li>
            <button type='submit'>Подтвердить</button>

          </ul>
        </fieldset>

      </form>

      
    </section>
  )
}

export default FormFilter